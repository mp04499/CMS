const jwt = require('jsonwebtoken');
const User = require('../db/models/user');

const verifyToken = async (token, secret, addSecurityChecks = {}) => new Promise(resolve =>
    jwt.verify(token, secret, { ...addSecurityChecks }, (err, result) => {
        if (err) {
            console.log('VERIFY: JWT ERROR: ', err.message);
            resolve({
                ok: false,
                user: err,
            });
        } else {
            resolve({
                ok: true,
                user: result.user,
            });
        }

    }));

const signToken = async (user, secret, expiration = 60 * 60, additionalClaims = {}) => new Promise(resolve =>
    jwt.sign(
        { user },
        secret,
        {
            expiresIn: expiration,
            ...additionalClaims,
        }, (err, result) => {
            if (err) {
                console.log('SIGN: JWT ERROR: ', err.message);
                resolve(undefined);
            } else {
                resolve(result);
            }
        },
    ));

const createTokens = async (data, additionalClaims = {}) => {
    const {
        user = {},
        refreshTokenSecret = process.env.SECRET_REFRESH_KEY,
    } = data;
    const createToken = await signToken(user, process.env.SECRET_KEY, process.env.TOKEN_EXPIRE, additionalClaims);
    const createRefreshToken = await signToken(user, refreshTokenSecret, process.env.TOKEN_EXPIRE, additionalClaims);

    return [createToken, createRefreshToken];
};

module.exports = { verifyToken, signToken, createToken };
