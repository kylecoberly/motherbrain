var {assert} = require("chai");
var index = require("../../app/controllers/index");
var sinon = require("sinon");

describe("unit | example", function(){
    describe("#someMethod", function(){
        it("unit works", done => {
            var spy = sinon.spy();
            index(null, {send: spy});
            assert.ok(spy.calledWith({message: "success!"}));
            done();
        });
    });
});
