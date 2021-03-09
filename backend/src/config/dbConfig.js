require("dotenv").config({
    path: process.env.NODE_ENV == "test" ? ".test.env" : ".env",
});

module.exports = {
    development: {
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASS || "root",
        database: process.env.DB_DATABASE || "maxxidata_dev",
        host: process.env.DB_HOST || "localhost",
        port: 5432,
        dialect: "postgres",
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
    test: {
        username: process.env.CI_DB_USERNAME,
        password: process.env.CI_DB_PASSWORD,
        database: process.env.CI_DB_NAME || "maxxidata_test",
        host: "localhost",
        port: 5432,
        dialect: "postgres",
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
    production: {
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME || "maxxidata_prod",
        host: process.env.PROD_DB_HOSTNAME,
        port: process.env.PROD_DB_PORT,
        dialect: "postgres",
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
};
