const assert = require("assert");
const request = require("supertest");
const execute = require("child_process").exec;

process.env.NODE_ENV = "test";
const VERSION = "/api/v1";

const app = require("../../app/index");

describe("acceptance - /standards", function(){
    beforeEach(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#GET /api/v1/standards", function(){
        it("displays a list of all serialized standards", done => {
            request(app)
                .get(`${VERSION}/standards`)
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
    });
    describe("#GET /api/v1/standards/:id", function(){
        it("displays a single serialized standard", done => {
            request(app)
                .get(`${VERSION}/standards/1`)
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
