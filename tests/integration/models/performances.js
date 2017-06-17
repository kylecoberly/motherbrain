const assert = require("assert");
const execute = require("child_process").exec;

process.env.NODE_ENV = "test";

const Performance = require("../../../app/models/Performance.js");

describe("integration - model - Performance", function(){
    before(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#getAll", function(){
        it("retrieves a list of performances", done => {
            Performance.getAll().then(performances => {
                assert.deepEqual(performances, [{
                    id: 1,
                    user_id: 1,
                    standard_id: 1,
                    score: 1,
                    updator_id: 2
                },{
                    id: 2,
                    user_id: 2,
                    standard_id: 2,
                    score: 2,
                    updator_id: 1
                }]);
                done();
            }).catch(done);
        });
    });
    describe("#getOne", function(){
        it("retrieves a single performance", done => {
            Performance.getOne(1).then(performance => {
                assert.deepEqual(performance, {
                    id: 1,
                    user_id: 1,
                    standard_id: 1,
                    score: 1,
                    updator_id: 2
                });
                done();
            }).catch(done);
        });
    });
});
