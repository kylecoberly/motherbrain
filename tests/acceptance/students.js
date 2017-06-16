const assert = require("assert");
const request = require("supertest");
const execute = require("child_process").exec;

process.env.NODE_ENV = "test";
const VERSION = "/api/v1";

const app = require("../../app/index");

describe("acceptance - /students", function(){
    beforeEach(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#GET /students", function(){
        it("displays a list of serialized students", done => {
            request(app)
                .get(`${VERSION}/students`)
                .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, [{
                    id: "1",
                    type: "students",
                    attributes: {
                        "first-name": "Kyle",
                        "last-name": "Coberly",
                        "email": "kyle.coberly@gmail.com",
                        "twitter": "kylecoberly",
                        "phone": "777-777-7777",
                        "github": "kylecoberly",
                        "linkedin": "kylecoberly",
                        "galvanize-id": "1"
                    }
                },{
                    id: "2",
                    type: "students",
                    attributes: {
                        "first-name": "Danny",
                        "last-name": "Fritz",
                        "email": "danny.fritz@gmail.com",
                        "twitter": "dannyfritz",
                        "phone": "777-777-7777",
                        "github": "dannyfritz",
                        "linkedin": "dannyfritz",
                        "galvanize-id": "2"
                    }
                }]);
                done();
            }).catch(done);
        });
    });
    describe("#GET /students/:id", function(){
        it("displays a single serialized student", done => {
            request(app)
                .get(`${VERSION}/students/1`)
                .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, {
                    id: "1",
                    type: "students",
                    attributes: {
                        "first-name": "Kyle",
                        "last-name": "Coberly",
                        "email": "kyle.coberly@gmail.com",
                        "twitter": "kylecoberly",
                        "phone": "777-777-7777",
                        "github": "kylecoberly",
                        "linkedin": "kylecoberly",
                        "galvanize-id": 1
                    }
                });
                done();
            }).catch(done);
        });
    });
});
