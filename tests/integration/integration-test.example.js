var assert = require("assert");
var request = require("supertest");
var execute = require("child_process").exec;

process.env.NODE_ENV = "test";
var app = require("../../app/index");

describe("integration | example", function(){
    describe("#someDataRequest", function(){
        beforeEach(done => {
            execute("npm run seed", done);
        });
        it("integration works", done => {
            request(app)
            .get("/")
            .expect(200, done);
        });
    });
});
