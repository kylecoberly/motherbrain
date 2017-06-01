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
            directory: `${__dirname}/database/test_migrations`
        },
        seeds: {
            directory: `${__dirname}/database/test_seeds`
        }
    },
    production: {
        client: "postgresql",
        connection: `${process.env.DATABASE_URL}?ssl=true`,
        migrations: {
            directory: `${__dirname}/database/migrations`
        },
        seeds: {
            directory: `${__dirname}/database/seeds`
        }
    },
    learn_development: {
        client: "postgresql",
        connection: "postgres:///learn",
        migrations: {
            directory: `${__dirname}/database/learn_migrations`
        },
        seeds: {
            directory: `${__dirname}/database/learn_seeds`
        }
    },
    learn_production: {
        client: "postgresql",
        connection: {
            database: process.env.LEARN_DATABASE,
            user: process.env.LEARN_USERNAME,
            password: process.env.LEARN_PASSWORD,
            host: process.env.LEARN_HOST
        }
    }
};
