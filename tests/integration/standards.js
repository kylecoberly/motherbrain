var assert = require("assert");
var execute = require("child_process").exec;

process.env.NODE_ENV = "test";

describe("integration | standards", function(){
    describe("#database", function(){
        beforeEach(done => {
            this.enableTimeouts(false);
            execute("npm run reset-test-data", done);
        });
        it("retrieves a list of standards from the learn database", done => {
            require("../../app/models/Standard.js")
                .query()
                .select("standards.id", "description", "success_criteria", "subjects.name AS subject")
                .from("standards")
                .innerJoin("subjects", "subjects.id", "standards.subject_id")
            .then(standards => {
                assert.deepEqual(standards, [{
                    id: 1,
                    "description": "Description 1",
                    "success_criteria": "Success Criteria 1",
                    "subject": "Subject 1"
                },{
                    id: 2,
                    "description": "Description 2",
                    "success_criteria": "Success Criteria 2",
                    "subject": "Subject 2"
                }]);
                done();
            }).catch(done);
        });
        it("retrieves a single standard from the learn database", done => {
            require("../../app/models/Standard.js")
                .query()
                .select("standards.id", "description", "success_criteria", "subjects.name AS subject")
                .from("standards")
                .innerJoin("subjects", "subjects.id", "standards.subject_id")
                .where("standards.id", 1)
            .then(standards => {
                assert.deepEqual(standards, [{
                    id: 1,
                    "description": "Description 1",
                    "success_criteria": "Success Criteria 1",
                    "subject": "Subject 1"
                }]);
                done();
            }).catch(done);
        });
    });
});
