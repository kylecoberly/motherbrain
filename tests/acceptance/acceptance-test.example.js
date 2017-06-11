const assert = require("assert");
const request = require("supertest");
const execute = require("child_process").exec;

process.env.NODE_ENV = "test";

const app = require("../../app/index");

describe.skip("acceptance - /example", function(){
    describe("#GET /example", function(){
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
