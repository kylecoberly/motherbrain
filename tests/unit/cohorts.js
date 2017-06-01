var assert = require("assert");

describe("unit | cohort serialization", function(){
    describe("#cohort-serializer", function(){
        var cohortSerializer = require("../../app/models/serializers/cohort");
        it("can serialize cohorts to JSON-API", done => {
            var serializedData = cohortSerializer["JSON-API"].serialize([{
                id: 1,
                "business-unit-id": 1,
                "learn-id": 1,
                name: "g1",
                "start_date": "2017-01-01T07:00:00.000Z",
                "end_date": "2017-07-01T06:00:00.000Z"
            },{
                id: 2,
                "business-unit-id": 1,
                "learn-id": 2,
                name: "g2",
                "start_date": "2017-02-01T07:00:00.000Z",
                "end_date": "2017-08-01T06:00:00.000Z"
            }]);
            assert.deepEqual(serializedData.data, [{
                id: "1",
                type: "cohorts",
                attributes: {
                    "business-unit-id": 1,
                    "learn-id": 1,
                    name: "g1",
                    "start-date": "2017-01-01T07:00:00.000Z",
                    "end-date": "2017-07-01T06:00:00.000Z"
                }
            },{
                id: "2",
                type: "cohorts",
                attributes: {
                    "business-unit-id": 1,
                    "learn-id": 2,
                    name: "g2",
                    "start-date": "2017-02-01T07:00:00.000Z",
                    "end-date": "2017-08-01T06:00:00.000Z"
                }
            }]);
            done();
        });
    });
});
