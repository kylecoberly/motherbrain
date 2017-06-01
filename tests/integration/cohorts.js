var assert = require("assert");
var execute = require("child_process").exec;

process.env.NODE_ENV = "test";

describe("integration | cohorts", function(){
    describe("#database", function(){
        beforeEach(done => {
            this.enableTimeouts(false);
            execute("npm run reset-test-data", done);
        });
        it("retrieves a list of cohorts from the learn database", done => {
            require("../../app/models/LearnCohort.js")
                .query()
                .select("name", "start_date", "end_date")
            .then(cohorts => {
                cohorts = cohorts.map(require("../../app/models/deserializers/learn-cohort"));
                assert.deepEqual(cohorts, [{
                    name: "g1",
                    "start_date": "2017-01-01T07:00:00.000Z",
                    "end_date": "2017-07-01T06:00:00.000Z"
                },{
                    name: "g2",
                    "start_date": "2017-02-01T07:00:00.000Z",
                    "end_date": "2017-08-01T06:00:00.000Z"
                },{
                    name: "g3",
                    "start_date": "2017-03-01T07:00:00.000Z",
                    "end_date": "2017-09-01T06:00:00.000Z"
                }]);
                done();
            }).catch(done);
        });
        it("retrieves a single cohort from the learn database", done => {
            require("../../app/models/LearnCohort.js")
                .query()
                .select("name", "start_date", "end_date")
                .where("id", 1)
                .first()
            .then(cohort => {
                cohort = require("../../app/models/deserializers/learn-cohort")(cohort);
                assert.deepEqual(cohort, {
                    name: "g1",
                    "start_date": "2017-01-01T07:00:00.000Z",
                    "end_date": "2017-07-01T06:00:00.000Z"
                });
                done();
            }).catch(done);
        });
        it("retrieves a list of cohorts from the local database", done => {
            require("../../app/models/Cohort.js")
                .query()
                .select("id", "business-unit-id", "learn-id")
            .then(cohorts => {
                assert.deepEqual(cohorts, [{
                    id: 1,
                    "business-unit-id": 1,
                    "learn-id": 1
                },{
                    id: 2,
                    "business-unit-id": 1,
                    "learn-id": 2
                },{
                    id: 3,
                    "business-unit-id": 2,
                    "learn-id": 3
                }]);
                done();
            }).catch(done);
        });
        it("retrieves a single cohort from the local database", done => {
            require("../../app/models/Cohort.js")
                .query()
                .where("id", 1)
                .first()
            .then(cohort => {
                assert.deepEqual(cohort, {
                    id: 1,
                    "business-unit-id": 1,
                    "learn-id": 1
                });
                done();
            }).catch(done);
        });
        it("retrieves a single of cohort from both data sources", done => {
            require("../../app/models/Cohort.js")
                .getCohort(1)
            .then(cohort => {
                assert.deepEqual(cohort, {
                    id: 1,
                    "business-unit-id": 1,
                    "learn-id": 1,
                    name: "g1",
                    "start_date": "2017-01-01T07:00:00.000Z",
                    "end_date": "2017-07-01T06:00:00.000Z"
                });
                done();
            }).catch(done);
        });
        it("retrieves a list of cohorts from both data sources based on business unit", done => {
            require("../../app/models/Cohort.js")
                .getCohortByBusinessUnit(1)
            .then(cohorts => {
                assert.deepEqual(cohorts, [{
                    id: 1,
                    "business-unit-id": 1,
                    "learn-id": 1,
                    name: "g1",
                    "start_date": "2017-01-01T07:00:00.000Z",
                    "end_date": "2017-07-01T06:00:00.000Z"
                },{
                    id: 2,
                    "business-unit-id": 1,
                    "learn-id": 2,
                    name: "g2",
                    "start_date": "2017-02-01T07:00:00.000Z",
                    "end_date": "2017-08-01T06:00:00.000Z"
                }]);
                done();
            }).catch(done);
        });
    });
});
