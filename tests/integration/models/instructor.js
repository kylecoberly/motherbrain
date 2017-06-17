const assert = require("assert");
const execute = require("child_process").exec;
process.env.NODE_ENV = "test";

const Instructor = require("../../../app/models/Instructor");

describe("integration - model - Instructor", function(){
    before(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#getAll", function(){
        it("retrieves a list of instructors", done => {
            Instructor.getAll().then(instructors => {
                assert.deepEqual(instructors, [{
                    id: 1,
                    first_name: "Kyle",
                    last_name: "Coberly",
                    title: "Faculty Director",
                    start_date: "2017-03-15T06:00:00.000Z",
                    description: "Description",
                    avatar: "www.google.com"
                },{
                    id: 2,
                    first_name: "Danny",
                    last_name: "Fritz",
                    title: "Faculty Director",
                    start_date: "2018-03-15T06:00:00.000Z",
                    description: "Description",
                    avatar: "www.google.com"
                }]);
                done();
            }).catch(done);
        });
    });
    describe("#getOne", function(){
        it("retrieves a single instructor", done => {
            Instructor.getOne(1).then(instructor => {
                assert.deepEqual(instructor, {
                    id: 1,
                    first_name: "Kyle",
                    last_name: "Coberly",
                    title: "Faculty Director",
                    start_date: "2017-03-15T06:00:00.000Z",
                    description: "Description",
                    avatar: "www.google.com"
                });
                done();
            }).catch(done);
        });
    });
});
