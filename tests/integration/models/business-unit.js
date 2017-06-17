const assert = require("assert");
const execute = require("child_process").exec;
const businessUnitFixtures = require("../../fixtures/business-units");

process.env.NODE_ENV = "test";

const BusinessUnit = require("../../../app/models/BusinessUnit.js");

describe("integration - model - BusinessUnit", function(){
    before(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#getAll", function(){
        it("retrieves a list of business units", done => {
            BusinessUnit.getAllWithRelations().then(businessUnits => {
                assert.deepEqual(businessUnits, businessUnitFixtures.raw);
                done();
            }).catch(done);
        });
    });
    describe("#getOne", function(){
        it("retrieves a single business unit", done => {
            BusinessUnit.getOneWithRelations(1).then(businessUnit => {
                assert.deepEqual(businessUnit, businessUnitFixtures.raw[0]);
                done();
            }).catch(done);
        });
    });
});
