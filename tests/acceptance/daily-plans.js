const assert = require("assert");
const request = require("supertest");
const execute = require("child_process").exec;

process.env.NODE_ENV = "test";
const VERSION = "/api/v1";

const app = require("../../app/index");

describe("acceptance - /daily-plans", function(){
    beforeEach(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#GET /daily-plans", function(){
        it("displays a list of serialized daily plans", done => {
            request(app)
                .get(`${VERSION}/daily-plans`)
                .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, [{
                    id: "1",
                    type: "daily-plans",
                    attributes: {
                        "cohort-id": 1,
                        "date": "2017-03-15T06:00:00.000Z",
                        "description": "Description",
                        "title": "Title"
                    }
                },{
                    id: "2",
                    type: "daily-plans",
                    attributes: {
                        "cohort-id": 2,
                        "date": "2018-03-15T06:00:00.000Z",
                        "description": "Description",
                        "title": "Title"
                    }
                }]);
                done();
            }).catch(done);
        });
    });
    describe("#GET /daily-plans/:id", function(){
        it("displays a single serialized daily plan", done => {
            request(app)
                .get(`${VERSION}/daily-plans/1`)
                .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, {
                    id: "1",
                    type: "daily-plans",
                    attributes: {
                        "cohort-id": 1,
                        "date": "2017-03-15T06:00:00.000Z",
                        "description": "Description",
                        "title": "Title"
                    }
                });
                done();
            }).catch(done);
        });
    });
});
