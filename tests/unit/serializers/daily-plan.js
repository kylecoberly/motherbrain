const assert = require("assert");
const serializer = require("../../../app/models/serializers/daily-plan");

describe("unit - serializer - daily plan", function(){
    describe("#JSON-API", function(){
        it("can serialize daily plans to JSON-API", done => {
            var serializedData = serializer["JSON-API"].serialize([{
                id: 1,
                cohort_id: 1,
                date: "2017-03-15T06:00:00.000Z",
                description: "Description",
                title: "Title"
            },{
                id: 2,
                cohort_id: 2,
                date: "2018-03-15T06:00:00.000Z",
                description: "Description",
                title: "Title"
            }]);
            assert.deepEqual(serializedData.data, [{
                id: "1",
                type: "daily-plans",
                attributes: {
                    "cohort-id": 1,
                    "date": "2017-03-15T06:00:00.000Z",
                    "description": "Description",
                    "title": "Title"
                }
            },{
                id: "2",
                type: "daily-plans",
                attributes: {
                    "cohort-id": 2,
                    "date": "2018-03-15T06:00:00.000Z",
                    "description": "Description",
                    "title": "Title"
                }
            }]);
            done();
        });
    });
});
