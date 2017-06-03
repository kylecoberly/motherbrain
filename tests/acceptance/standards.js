var assert = require("assert");
var request = require("supertest");
var execute = require("child_process").exec;

var app = require("../../app/index");

process.env.NODE_ENV = "test";

describe("acceptance | standards", function(){
    describe("#API", function(){
        beforeEach(done => {
            this.enableTimeouts(false);
            execute("npm run reset-test-data", done);
        });
        it("displays a list of all standards", done => {
            request(app)
                .get("/api/v1/standards")
                .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, [{
                    id: "1",
                    type: "standards",
                    attributes: {
                        description: "Description 1",
                        "success-criteria": "Success Criteria 1",
                        subject: "Subject 1"
                    }
                },{
                    id: "2",
                    type: "standards",
                    attributes: {
                        description: "Description 2",
                        "success-criteria": "Success Criteria 2",
                        subject: "Subject 2"
                    }
                }]);
                done();
            }).catch(done);
        });
        it("displays a single standard", done => {
            request(app)
                .get("/api/v1/standards/1")
                .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, {
                    id: "1",
                    type: "standards",
                    attributes: {
                        description: "Description 1",
                        "success-criteria": "Success Criteria 1",
                        subject: "Subject 1"
                    }
                });
                done();
            }).catch(done);
        });
    });
});
