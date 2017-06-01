var assert = require("assert");
var request = require("supertest");
var execute = require("child_process").exec;

var app = require("../../app/index");

process.env.NODE_ENV = "test";

describe("acceptance | cohorts", function(){
    describe("#API", function(){
        beforeEach(done => {
            this.enableTimeouts(false);
            execute("npm run reset-test-data", done);
        });
        it("displays a list of all cohorts", done => {
            request(app)
                .get("/api/v1/business-units/1/cohorts")
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
        xit("displays a list of all cohorts with related data", done => {
            request(app).get("/api/v1/cohorts")
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
