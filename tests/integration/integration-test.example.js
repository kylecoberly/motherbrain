var assert = require("assert");
var execute = require("child_process").exec;

process.env.NODE_ENV = "test";

xdescribe("integration | example", function(){
    describe("#database", function(){
        beforeEach(done => {
            execute("npm run seed", done);
        });
        it("retrieves a list", done => {
            var Example = require("../../app/models/example.js");
            Example.query().then(examples => {
                assert.deepEqual(examples, [{
                    id: 1,
                    label: "Thing 1",
                },{
                    id: 2,
                    label: "Thing 2",
                }]);
                done();
            }).catch(done);
        });
    });
});
