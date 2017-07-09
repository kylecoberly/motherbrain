const assert = require("assert");
const request = require("supertest");
const execute = require("child_process").exec;

process.env.NODE_ENV = "test";
const VERSION = "/api/v1";

const app = require("../../app/index");

describe("acceptance - /cohorts", function(){
    before(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    xdescribe("#GET /cohorts/:id", function(){
        it("displays a single serialized cohort", done => {
            request(app)
                .get(`${VERSION}/cohorts/1`)
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
                    },
                    relationships: {
                        "lead-instructor": {
                            data: {
                                type: "instructor",
                                id: "1"
                            }
                        }
                    }
                });
                done();
            }).catch(done);
        });
    });
    xdescribe("#GET /cohorts", function(){
        it("displays a list of all serialized cohorts with related data", done => {
            request(app).get(`${VERSION}/cohorts`)
            .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, [{
                    id: "1",
                    type: "cohorts",
                    attributes: {
                        label: "g1",
                        "business-unit-id": "1",
                        "start-date": "2017-01-01",
                        "end-date": "2017-07-01",
                        "learn-id": "1"
                    },
                    relationships: {
                        "lead-instructor": {
                            data: {
                                type: "instructor",
                                id: "1"
                            }
                        },
                        "students": {
                            data: [{
                                type: "student",
                                id: "1"
                            },{
                                type: "student",
                                id: "2"
                            }]
                        },
                        "standards": {
                            data: [{
                                type: "standard",
                                id: "1"
                            },{
                                type: "standards",
                                id: "2"
                            },{
                                type: "standards",
                                id: "3"
                            }]
                        }
                    }
                },{
                    id: "2",
                    type: "cohorts",
                    attributes: {
                        label: "g2",
                        "business-unit-id": "1",
                        "start-date": "2017-02-01",
                        "end-date": "2017-08-01",
                        "learn-id": "2"
                    },
                    relationships: {
                        "lead-instructor": {
                            data: {
                                type: "instructor",
                                id: "2"
                            }
                        },
                        "students": {
                            data: [{
                                type: "student",
                                id: "2"
                            }]
                        },
                        "standards": {
                            data: [{
                                type: "standard",
                                id: "2"
                            }]
                        }
                    }
                },{
                    id: "3",
                    type: "cohorts",
                    attributes: {
                        label: "g3",
                        "business-unit-id": "2",
                        "start-date": "2017-01-01",
                        "end-date": "2017-07-01",
                        "learn-id": "3"
                    },
                    relationships: {
                        "lead-instructor": {
                            data: {
                                type: "instructor",
                                id: "3"
                            }
                        },
                        "students": {
                            data: [{
                                type: "student",
                                id: "3"
                            }]
                        },
                        "standards": {
                            data: [{
                                type: "standards",
                                id: "3"
                            }]
                        }
                    }
                }]);
                done();
            }).catch(done);
        });
    });
});
