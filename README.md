# Motherbrain API

Galvanize staff, student, and cohort API aggregator.

Deployed URL: http://galvanize-motherbrain.herokuapp.com/

Uses:

## Technologies

* Express
* Passport for Authentication
* JSONAPI-Serializer for Serialing/Deserializing
* Knex.js for database migration/seeding
* Objection ORM
* Postgres database

## Setup

1. `yarn` or `npm install`
1. Copy `.env.example` to `.env` and replace the values
1. `createdb motherbrain`
1. `npm run migrate && npm run seed` to populate the database
1. `npm start` to run production build
1. `npm run dev` to run locally

Testing can be setup using:

1. `createdb motherbrain-test`
1. `createdb learn`
1. `npm run migrate:test && npm run seed:test`
1. `npm run migrate:dev && npm run seed:dev`

## Testing

* Mocha/Chai and Sinon for unit and integration testing
* Supertest for acceptance testing
1. `npm test` to run all tests
1. `npm run [test-level]` to run individual test levels, where [level] is `unit`|`integration`|`acceptance`
1. `npm run find-test [search-term]` to grep for specific tests

## Endpoints

### Business Units

Business Units are programs: Denver WDI (1), Boulder WDI (2), etc.

* `/api/v1/business-units`
* `/api/v1/business-units/:business_unit_id`
* `/api/v1/business-units/:business_unit_id/cohorts`
* `/api/v1/business-units/:business_unit_id/cohorts/:cohort_id`

### Cohorts

* `/api/v1/cohorts/:cohort_id`

### Students

* `/api/v1/students`
* `/api/v1/students/:student_id`
* `/api/v1/business-units/:business_unit_id/cohorts/:cohort_id/students`
* `/api/v1/cohorts/:cohort_id/students`

### Standards

* `/api/v1/standards`
* `/api/v1/standards/:standard_id`

### Performances

* `/api/v1/performances`
* `/api/v1/performances/:performance_id`

### Daily Plans

* `/api/v1/daily-plans`
* `/api/v1/daily-plans/:daily_plan_id`

### Instructors

* `/api/v1/instructors`
* `/api/v1/instructors/:instructor_id`
