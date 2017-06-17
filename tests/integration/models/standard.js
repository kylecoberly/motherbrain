const assert = require("assert");
const execute = require("child_process").exec;

process.env.NODE_ENV = "test";

const Standard = require("../../../app/models/Standard.js");

describe("integration - model - Standard", function(){
    before(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#getAll", function(){
        it("retrieves a list of standards", done => {
            Standard.getAll().then(standards => {
                assert.deepEqual(standards, [{
                    id: 1,
                    description: "Description 1",
                    success_criteria: "Success Criteria 1",
                    subject: "Subject 1"
                },{
                    id: 2,
                    description: "Description 2",
                    success_criteria: "Success Criteria 2",
                    subject: "Subject 2"
                }]);
                done();
            }).catch(done);
        });
    });
    describe("#getOne", function(){
        it("retrieves a single standard", done => {
            Standard.getOne(1).then(standard => {
                assert.deepEqual(standard, {
                    id: 1,
                    description: "Description 1",
                    success_criteria: "Success Criteria 1",
                    subject: "Subject 1"
                });
                done();
            }).catch(done);
        });
    });
});
