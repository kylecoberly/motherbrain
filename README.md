# Motherbrain API

Galvanize staff, student, and cohort API aggregator. Uses:

## Technologies

* Express
* Passport for Authentication
* JSONAPI-Serializer for Serialing/Deserializing
* Knex.js for database migration/seeding
* Objection ORM
* Postgres database

## Setup

1. `yarn` or `npm install
1. Copy `.env.example` to `.env` and replace the values
1. `npm run migrate && npm run seed` to populate the database
1. `npm start` to run production build
1. `npm run dev` to run locally

## Testing 

* Mocha/Chai and Sinon for unit and integration testing
* Supertest for acceptance testing
1. `npm test` to run Testem on all tests
1. `npm run [test-level]` to run individual test levels, where [level] is `unit`|`integration`|`acceptance`
1. `npm run find-test || [search-term]` to grep for specific tests

## Endpoints

* `/api/v1/business-units`
* `/api/v1/business-units/:id/cohorts`
* `/api/v1/cohorts/:id`
