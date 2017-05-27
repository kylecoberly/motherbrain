var assert = require("assert");
var request = require("supertest");
var execute = require("child_process").exec;

var app = require("../../app/index");

process.env.NODE_ENV = "test";

describe("acceptance | business units", function(){
    describe("#API", function(){
        beforeEach(done => {
            execute("npm run seed", done);
        });
        it("displays a list of serialized business units", done => {
            request(app).get("/api/v1/business-units")
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
            });
            done();
        });
    });
});
