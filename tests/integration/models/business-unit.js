const assert = require("assert");
const execute = require("child_process").exec;

process.env.NODE_ENV = "test";

const BusinessUnit = require("../../../app/models/BusinessUnit.js");

describe("integration - model - BusinessUnit", function(){
    beforeEach(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#getAll", function(){
        it("retrieves a list of business units", done => {
            BusinessUnit.getAll().then(businessUnits => {
                assert.deepEqual(businessUnits, [{
                    id: 1,
                    label: "Denver WDI",
                    city: "Denver",
                    state: "Colorado"
                },{
                    id: 2,
                    label: "Miami WDI",
                    city: "Miami",
                    state: "Florida"
                }]);
                done();
            }).catch(done);
        });
    });
    describe("#getOne", function(){
        it("retrieves a single business unit", done => {
            BusinessUnit.getOne(1).then(businessUnit => {
                assert.deepEqual(businessUnit, {
                    id: 1,
                    label: "Denver WDI",
                    city: "Denver",
                    state: "Colorado"
                });
                done();
            }).catch(done);
        });
    });
});
