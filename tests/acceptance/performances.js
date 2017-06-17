const assert = require("assert");
const request = require("supertest");
const execute = require("child_process").exec;

process.env.NODE_ENV = "test";
const VERSION = "/api/v1";

const app = require("../../app/index");

describe("acceptance - /performances", function(){
    before(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#GET /performances", function(){
        it("displays a list of serialized performances", done => {
            request(app)
                .get(`${VERSION}/performances`)
                .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, [{
                    id: "1",
                    type: "performances",
                    attributes: {
                        "user-id": 1,
                        "standard-id": 1,
                        "score": 1,
                        "updator-id": 2
                    }
                },{
                    id: "2",
                    type: "performances",
                    attributes: {
                        "user-id": 2,
                        "standard-id": 2,
                        "score": 2,
                        "updator-id": 1
                    }
                }]);
                done();
            }).catch(done);
        });
    });
    describe("#GET /performances/:id", function(){
        it("displays a single serialized performance", done => {
            request(app)
                .get(`${VERSION}/performances/1`)
                .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, {
                    id: "1",
                    type: "performances",
                    attributes: {
                        "user-id": 1,
                        "standard-id": 1,
                        "score": 1,
                        "updator-id": 2
                    }
                });
                done();
            }).catch(done);
        });
    });
});
