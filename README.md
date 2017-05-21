# Motherbrain API

Galvanize staff, student, and cohort API aggregator. Uses:

## Technologies

* Express
* Passport for Authentication
* JSONAPI-Serializer for Serialing/Deserializing
* Knex.js for database migration/seeding
* Objection ORM
* Postgres database

### Testing 

* Mocha/Chai and Sinon for unit testing
* Supertest for integration testing
* Axios for acceptance testing
* Testem for test-running

## Setup

1. `yarn` or `npm install
1. Copy `.env.example` to `.env` and replace the values
1. `npm run migrate && npm run seed` to populate the database
1. `npm run dev` to run locally
1. `npm run test-env` to start test environment
    1. `npm test` to run Testem on all tests
    1. `npm run [test-level]` to run individual test levels, where [level] is `unit`|`integration`|`acceptance`
    1. `npm run [test-level] -- -g [search-term]` to grep for specific tests

## Endpoints

* `/`
