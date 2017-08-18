const assert = require("chai").assert;
const request = require("supertest");
const execute = require("child_process").exec;

const businessUnitFixtures = require("../fixtures/business-units");
const studentsFixture = require("../fixtures/students");

process.env.NODE_ENV = "test";
const VERSION = "/api/v1";

const app = require("../../app/index");

describe("acceptance - /business-units", function(){
    before(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#GET /business-units", function(){
        it("displays a list of serialized business units", done => {
            request(app)
                .get(`${VERSION}/business-units`)
                .expect(200)
            .then(response => {
                assert.sameDeepMembers(response.body.data, businessUnitFixtures.JSONAPI.data);
                assert.sameDeepMembers(response.body.included, businessUnitFixtures.JSONAPI.included);
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
                assert.deepEqual(response.body.data, businessUnitFixtures.JSONAPI.data[0]);
                done();
            }).catch(done);
        });
    });

    describe("#GET /business-units/:id/cohorts/:cohort_id/", function(){
        it("displays a list of cohorts' students", done => {
            request(app)
                .get(`${VERSION}/business-units/1/cohorts/1/students`)
                .expect(200)
            .then(response => {
                assert.deepEqual(response.body.data, studentsFixture.JSONAPI.cohort1Students.data);
                done();
            }).catch(done);
        });
    });
});
