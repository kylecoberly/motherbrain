const assert = require("assert");
const execute = require("child_process").exec;

process.env.NODE_ENV = "test";

const Student = require("../../../app/models/Student.js");

describe("integration - model - Student", function(){
    beforeEach(done => {
        this.enableTimeouts(false);
        execute("npm run reset-test-data", done);
    });
    describe("#getAll", function(){
        it("retrieves a list of students", done => {
            Student.getAll().then(students => {
                assert.deepEqual(students, [{
                    id: 1,
                    first_name: "Kyle",
                    last_name: "Coberly",
                    email: "kyle.coberly@gmail.com",
                    twitter: "kylecoberly",
                    phone: "777-777-7777",
                    github: "kylecoberly",
                    linkedin: "kylecoberly",
                    galvanize_id: 1
                },{
                    id: 2,
                    first_name: "Danny",
                    last_name: "Fritz",
                    email: "danny.fritz@gmail.com",
                    twitter: "dannyfritz",
                    phone: "777-777-7777",
                    github: "dannyfritz",
                    linkedin: "dannyfritz",
                    galvanize_id: 2
                }]);
                done();
            }).catch(done);
        });
    });
    describe("#getOne", function(){
        it("retrieves a single student", done => {
            Student.getOne(1).then(student => {
                assert.deepEqual(student, {
                    id: 1,
                    first_name: "Kyle",
                    last_name: "Coberly",
                    email: "kyle.coberly@gmail.com",
                    twitter: "kylecoberly",
                    phone: "777-777-7777",
                    github: "kylecoberly",
                    linkedin: "kylecoberly",
                    galvanize_id: 1
                });
                done();
            }).catch(done);
        });
    });
});
