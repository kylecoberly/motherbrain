const assert = require("assert");
const execute = require("child_process").exec;

process.env.NODE_ENV = "test";

const LearnCohort = require("../../../app/models/LearnCohort.js");
const Serializer = require("../../../app/models/deserializers/learn-cohort");

describe("integration - model - LearnCohort", function(){
    before(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#getAll", function(){
        it("retrieves a list of cohorts", done => {
            LearnCohort.getAll().then(cohorts => {
                assert.deepEqual(Serializer(cohorts), [{
                    id: 1,
                    name: "g1",
                    start_date: "2017-01-01T07:00:00.000Z",
                    end_date: "2017-07-01T06:00:00.000Z"
                },{
                    id: 2,
                    name: "g2",
                    start_date: "2017-02-01T07:00:00.000Z",
                    end_date: "2017-08-01T06:00:00.000Z"
                },{
                    id: 3,
                    name: "g3",
                    start_date: "2017-03-01T07:00:00.000Z",
                    end_date: "2017-09-01T06:00:00.000Z"
                }]);
                done();
            }).catch(done);
        });
    });
    describe("#getOne", function(){
        it("retrieves a single cohort", done => {
            LearnCohort.getOne(1).then(cohort => {
                assert.deepEqual(Serializer(cohort), {
                    id: 1,
                    name: "g1",
                    start_date: "2017-01-01T07:00:00.000Z",
                    end_date: "2017-07-01T06:00:00.000Z"
                });
                done();
            }).catch(done);
        });
    });
});
