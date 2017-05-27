var assert = require("assert");
var sinon = require("sinon");

xdescribe("unit | example", function(){
    describe("#controller", function(){
        var controller = require("../../app/controllers/index");
        it("responds with success", done => {
            var spy = sinon.spy();
            controller(null, {send: spy});
            assert.ok(spy.calledWith({message: "success!"}));
            done();
        });
    });
});
