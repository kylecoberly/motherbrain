const assert = require("assert");
const serializer = require("../../../app/models/serializers/standard");

describe("unit - serializer - standard", function(){
    describe("#JSON-API", function(){
        it("can serialize standards to JSON-API", done => {
            var serializedData = serializer["JSON-API"].serialize([{
                id: 1,
                "description": "Description 1",
                "success_criteria": "Success Criteria 1",
                "subject": "Subject 1"
            },{
                id: 2,
                "description": "Description 2",
                "success_criteria": "Success Criteria 2",
                "subject": "Subject 2"
            }]);
            assert.deepEqual(serializedData.data, [{
                id: "1",
                type: "standards",
                attributes: {
                    "description": "Description 1",
                    "success-criteria": "Success Criteria 1",
                    "subject": "Subject 1"
                }
            },{
                id: "2",
                type: "standards",
                attributes: {
                    "description": "Description 2",
                    "success-criteria": "Success Criteria 2",
                    "subject": "Subject 2"
                }
            }]);
            done();
        });
    });
});
