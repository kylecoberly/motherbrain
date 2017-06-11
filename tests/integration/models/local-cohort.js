const assert = require("assert");
const execute = require("child_process").exec;

process.env.NODE_ENV = "test";

const LocalCohort = require("../../../app/models/LocalCohort.js");

describe("integration - model - LocalCohort", function(){
    beforeEach(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#getAll", function(){
        it("retrieves a list of cohorts", done => {
            LocalCohort.getAll().then(cohorts => {
                assert.deepEqual(cohorts, [{
                    id: 1,
                    business_unit_id: 1,
                    learn_id: 1
                },{
                    id: 2,
                    business_unit_id: 1,
                    learn_id: 2
                },{
                    id: 3,
                    business_unit_id: 2,
                    learn_id: 3
                }]);
                done();
            }).catch(done);
        });
    });
    describe("#getOne", function(){
        it("retrieves a single cohort", done => {
            LocalCohort.getOne(1).then(cohort => {
                assert.deepEqual(cohort, {
                    id: 1,
                    business_unit_id: 1,
                    learn_id: 1
                });
                done();
            }).catch(done);
        });
    });
});
