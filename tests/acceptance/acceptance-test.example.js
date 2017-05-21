var {assert} = require("chai");
var http = require("axios");
var execute = require("child_process").exec;

process.env.NODE_ENV = "test";

describe("acceptance | example", function(){
    describe("#someTask", function(){
        beforeEach(done => {
            execute("npm run seed", done);
        });
        it("acceptance works", done => {
            const PORT = 9876;
            http.get(`http://localhost:${PORT}`).then(response => {
                assert.equal(response.status, 200);
                done();
            });
        });
    });
});
