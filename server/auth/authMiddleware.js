const jwt = require('jsonwebtoken');
const { setCookies } = require('./handleHeader');
const User = require('../db/models/user');

const getCookie = (src, name) => {
    const value = `; ${src}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

const authMiddleware = async (req, res, next) => {
    req.user = undefined;

    let token;
    let refreshToken;

    token = getCookie(req.headers.cookie, process.env.COOKIE_NAME);
    refreshToken = getCookie(req.headers.cookie, process.env.REFRESH_TOKEN);

    if (token) {
        try {
            const { id } = jwt.verify(token, process.env.SECRET_KEY);
            const user = await User.findById(id).exec();
            req.user = user;
        } catch (error) {
            const {
                token: newToken,
                refreshToken: newRefreshToken,
                user
            } = await refreshTokens(refreshToken);

            if (newToken && newRefreshToken)
                setCookies(res, newToken, newRefreshToken);

            req.user = user
        }
    }
    next();
};

module.exports = authMiddleware;