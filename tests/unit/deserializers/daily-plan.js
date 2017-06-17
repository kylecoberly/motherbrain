const assert = require("assert");
const deserializer = require("../../../app/models/deserializers/daily-plan");

describe("unit - deserializer - daily plan", function(){
    describe("#deserialize", function(){
        it("can deserialize multiple records", done => {
            var serializedData = deserializer([{
                id: 1,
                date: new Date("2017-03-15")
            },{
                id: 2,
                date: new Date("2018-03-15")
            }]);
            assert.deepEqual(serializedData, [{
                id: "1",
                date: "2017-03-15T00:00:00.000Z"
            },{
                id: "2",
                date: "2018-03-15T00:00:00.000Z"
            }]);
            done();
        });
    });
});
