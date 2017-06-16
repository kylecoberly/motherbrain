const assert = require("assert");
const serializer = require("../../../app/models/serializers/student");

describe("unit - serializer - student", function(){
    describe("#JSON-API", function(){
        it("can serialize students to JSON-API", done => {
            var serializedData = serializer["JSON-API"].serialize([{
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
            assert.deepEqual(serializedData.data, [{
                id: "1",
                type: "students",
                attributes: {
                    "first-name": "Kyle",
                    "last-name": "Coberly",
                    "email": "kyle.coberly@gmail.com",
                    "twitter": "kylecoberly",
                    "phone": "777-777-7777",
                    "github": "kylecoberly",
                    "linkedin": "kylecoberly",
                    "galvanize-id": 1
                }
            },{
                id: "2",
                type: "students",
                attributes: {
                    "first-name": "Danny",
                    "last-name": "Fritz",
                    "email": "danny.fritz@gmail.com",
                    "twitter": "dannyfritz",
                    "phone": "777-777-7777",
                    "github": "dannyfritz",
                    "linkedin": "dannyfritz",
                    "galvanize-id": 2
                }
            }]);
            done();
        });
    });
});
