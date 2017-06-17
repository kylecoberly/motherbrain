const assert = require("assert");
const request = require("supertest");
const execute = require("child_process").exec;

process.env.NODE_ENV = "test";
const VERSION = "/api/v1";

const app = require("../../app/index");

describe("acceptance - /instructors", function(){
    before(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#GET /instructors", function(){
        it("displays a list of serialized instructors", done => {
            request(app)
                .get(`${VERSION}/instructors`)
                .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, [{
                    id: "1",
                    type: "instructors",
                    attributes: {
                        "first-name": "Kyle",
                        "last-name": "Coberly",
                        "title": "Faculty Director",
                        "start-date": "2017-03-15T06:00:00.000Z",
                        "description": "Description",
                        "avatar": "www.google.com"
                    }
                },{
                    id: "2",
                    type: "instructors",
                    attributes: {
                        "first-name": "Danny",
                        "last-name": "Fritz",
                        "title": "Faculty Director",
                        "start-date": "2018-03-15T06:00:00.000Z",
                        "description": "Description",
                        "avatar": "www.google.com"
                    }
                }]);
                done();
            }).catch(done);
        });
    });
    describe("#GET /instructors/:id", function(){
        it("displays a single serialized instructor", done => {
            request(app)
                .get(`${VERSION}/instructors/1`)
                .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, {
                    id: "1",
                    type: "instructors",
                    attributes: {
                        "first-name": "Kyle",
                        "last-name": "Coberly",
                        "title": "Faculty Director",
                        "start-date": "2017-03-15T06:00:00.000Z",
                        "description": "Description",
                        "avatar": "www.google.com"
                    }
                });
                done();
            }).catch(done);
        });
    });
});
