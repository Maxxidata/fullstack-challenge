require("dotenv").config({
    path: process.env.NODE_ENV == "test" ? ".test.env" : ".env",
});

const appConfig = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "production",
};

module.exports = appConfig;
