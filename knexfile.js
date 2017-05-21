require("dotenv").load();

module.exports = {
    development: {
        client: "postgresql",
        connection: "postgres:///motherbrain",
        migrations: {
            directory: `${__dirname}/database/migrations`
        },
        seeds: {
            directory: `${__dirname}/database/seeds`
        }
    },
    test: {
        client: "postgresql",
        connection: "postgres:///motherbrain-test",
        migrations: {
            directory: `${__dirname}/database/migrations`
        },
        seeds: {
            directory: `${__dirname}/database/seeds`
        }
    },
    production: {
        client: "postgresql",
        connection: `${process.env.DATABASE_URL}?ssl=true`
    }
};
