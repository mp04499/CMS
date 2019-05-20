const setCookies = (res, newToken, newRefreshToken) => {
    res
        .cookie(process.env.COOKIE_NAME, newToken, {
            resave: false,
            saveUninitialized: true,
            httpOnly: true,  // dont let browser javascript access cookie ever
            secure: false, // only use cookie over https
            ephemeral: true
        })
        .cookie(process.env.COOKIE_REFRESH, newRefreshToken, {
            resave: false,
            saveUninitialized: true,
            httpOnly: true,  // dont let browser javascript access cookie ever
            secure: false, // only use cookie over https
            ephemeral: true
        });
};

const unsetCookies = response => response
    .clearCookie(process.env.COOKIE_NAME)
    .clearCookie(process.env.COOKIE_REFRESH);

module.exports = { setCookies, unsetCookies };