var assert = require("assert");
var request = require("supertest");
var execute = require("child_process").exec;

var app = require("../../app/index");

process.env.NODE_ENV = "test";

describe.skip("acceptance | example", function(){
    describe("#API", function(){
        beforeEach(done => {
            execute("npm run seed", done);
        });
        it("acceptance works", done => {
            request(app)
                .get("/api")
                .expect(200)
            .then(response => {
                assert.equal(response.body, {message: "success!"});
                done();
            });
        });
    });
});
