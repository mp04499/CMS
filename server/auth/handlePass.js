const argon2 = require('argon2');
const jsonwebtoken = require('jsonwebtoken');

const createToken = async (id, email) => {
    const token = await jsonwebtoken.sign({
        id,
        email
    }, process.env.SECRET_KEY, { expiresIn: '2w' });

    return token;
}

const isValid = async (inputPass, userPass) => {
    const valid = await argon2.verify(userPass, inputPass);

    return valid;
}

const hashPass = async input => {
    try {
        const hash = await argon2.hash(input.password)
        const newInput = await { ...input, password: hash };

        return newInput;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { createToken, isValid, hashPass };