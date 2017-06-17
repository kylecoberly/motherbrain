const assert = require("assert");
const serializer = require("../../../app/models/serializers/performance");

describe("unit - serializer - performance", function(){
    describe("#JSON-API", function(){
        it("can serialize performances to JSON-API", done => {
            var serializedData = serializer["JSON-API"].serialize([{
                id: 1,
                user_id: 1,
                standard_id: 1,
                score: 1,
                updator_id: 2
            },{
                id: 2,
                user_id: 2,
                standard_id: 2,
                score: 2,
                updator_id: 1
            }]);
            assert.deepEqual(serializedData.data, [{
                id: "1",
                type: "performances",
                attributes: {
                    "user-id": 1,
                    "standard-id": 1,
                    "score": 1,
                    "updator-id": 2
                }
            },{
                id: "2",
                type: "performances",
                attributes: {
                    "user-id": 2,
                    "standard-id": 2,
                    "score": 2,
                    "updator-id": 1
                }
            }]);
            done();
        });
    });
});
