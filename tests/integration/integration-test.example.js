var assert = require("assert");
var execute = require("child_process").exec;

process.env.NODE_ENV = "test";

describe.skip("integration - example", function(){
    describe("#database", function(){
        beforeEach(done => {
            this.enableTimeouts(false);
            execute("npm run seed", done);
        });
        it("retrieves a list", done => {
            require("../../app/models/example.js")
                .query()
                .select("id", "label")
            .then(examples => {
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
