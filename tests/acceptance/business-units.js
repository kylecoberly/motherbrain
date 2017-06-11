const assert = require("assert");
const request = require("supertest");
const execute = require("child_process").exec;

process.env.NODE_ENV = "test";
const VERSION = "/api/v1";

const app = require("../../app/index");

describe("acceptance - /business-units", function(){
    beforeEach(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#GET /business-units", function(){
        it("displays a list of serialized business units", done => {
            request(app)
                .get(`${VERSION}/business-units`)
                .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, [{
                    id: "1",
                    type: "business-units",
                    attributes: {
                        label: "Denver WDI",
                        city: "Denver",
                        state: "Colorado"
                    }
                },{
                    id: "2",
                    type: "business-units",
                    attributes: {
                        label: "Miami WDI",
                        city: "Miami",
                        state: "Florida"
                    }
                }]);
                done();
            }).catch(done);
        });
    });
    describe("#GET /business-units/:id", function(){
        it("displays a single serialized business unit", done => {
            request(app)
                .get(`${VERSION}/business-units/1`)
                .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, {
                    id: "1",
                    type: "business-units",
                    attributes: {
                        label: "Denver WDI",
                        city: "Denver",
                        state: "Colorado"
                    }
                });
                done();
            }).catch(done);
        });
    });
    describe("#GET /business-units/:id/cohorts/:id", function(){
        it("displays a single cohort by business-unit", done => {
            request(app)
                .get(`${VERSION}/business-units/1/cohorts/1`)
                .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, {
                    id: "1",
                    type: "cohorts",
                    attributes: {
                        name: "g1",
                        "business-unit-id": 1,
                        "start-date": "2017-01-01T07:00:00.000Z",
                        "end-date": "2017-07-01T06:00:00.000Z",
                        "learn-id": 1
                    }
                });
                done();
            }).catch(done);
        });
    });
    describe("#GET /business-units/:id/cohorts", function(){
        it("displays a list of all serialized cohorts by business unit", done => {
            request(app)
                .get(`${VERSION}/business-units/1/cohorts`)
                .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, [{
                    id: "1",
                    type: "cohorts",
                    attributes: {
                        name: "g1",
                        "business-unit-id": 1,
                        "start-date": "2017-01-01T07:00:00.000Z",
                        "end-date": "2017-07-01T06:00:00.000Z",
                        "learn-id": 1
                    }
                },{
                    id: "2",
                    type: "cohorts",
                    attributes: {
                        name: "g2",
                        "business-unit-id": 1,
                        "start-date": "2017-02-01T07:00:00.000Z",
                        "end-date": "2017-08-01T06:00:00.000Z",
                        "learn-id": 2
                    }
                }]);
                done();
            }).catch(done);
        });
    });
});
