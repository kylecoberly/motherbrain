const assert = require("assert");
const execute = require("child_process").exec;
process.env.NODE_ENV = "test";

const Cohort = require("../../../app/models/Cohort");

describe("integration - model - Cohort", function(){
    before(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#getOne", function(){
        it("retrieves a single cohort", done => {
            Cohort.getOne(1).then(cohort => {
                assert.deepEqual(cohort, {
                    id: 1,
                    business_unit_id: 1,
                    learn_id: 1,
                    name: "g1",
                    start_date: "2017-01-01T07:00:00.000Z",
                    end_date: "2017-07-01T06:00:00.000Z"
                });
                done();
            }).catch(done);
        });
    });
    describe("#getOneByBusinessUnit", function(){
        it("retrieves a list of cohorts", done => {
            Cohort.getOneByBusinessUnit(1).then(cohorts => {
                assert.deepEqual(cohorts, [{
                    id: 1,
                    business_unit_id: 1,
                    learn_id: 1,
                    name: "g1",
                    start_date: "2017-01-01T07:00:00.000Z",
                    end_date: "2017-07-01T06:00:00.000Z"
                },{
                    id: 2,
                    business_unit_id: 1,
                    learn_id: 2,
                    name: "g2",
                    start_date: "2017-02-01T07:00:00.000Z",
                    end_date: "2017-08-01T06:00:00.000Z"
                }]);
                done();
            }).catch(done);
        });
    });
});
