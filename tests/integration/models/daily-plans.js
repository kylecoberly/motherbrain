const assert = require("assert");
const execute = require("child_process").exec;

process.env.NODE_ENV = "test";

const DailyPlan = require("../../../app/models/DailyPlan");

describe("integration - model - DailyPlan", function(){
    beforeEach(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#getAll", function(){
        it("retrieves a list of daily plans", done => {
            DailyPlan.getAll().then(dailyPlans => {
                assert.deepEqual(dailyPlans, [{
                    id: 1,
                    cohort_id: 1,
                    date: "2017-03-15T06:00:00.000Z",
                    description: "Description",
                    title: "Title"
                },{
                    id: 2,
                    cohort_id: 1,
                    date: "2018-03-15T06:00:00.000Z",
                    description: "Description",
                    title: "Title"
                }]);
                done();
            }).catch(done);
        });
    });
    describe("#getOne", function(){
        it("retrieves a single daily plan", done => {
            DailyPlan.getOne(1).then(dailyPlan => {
                assert.deepEqual(dailyPlan, {
                    id: 1,
                    cohort_id: 1,
                    date: "2017-03-15T06:00:00.000Z",
                    description: "Description",
                    title: "Title"
                });
                done();
            }).catch(done);
        });
    });
});
