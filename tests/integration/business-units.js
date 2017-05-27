var assert = require("assert");
var execute = require("child_process").exec;

process.env.NODE_ENV = "test";

describe("integration | business units", function(){
    describe("#database", function(){
        beforeEach(done => {
            execute("npm run seed", done);
        });
        it("retrieves a list of business units", done => {
            var BusinessUnit = require("../../app/models/BusinessUnit.js");
            BusinessUnit.query().then(businessUnits => {
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
});
