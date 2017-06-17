const assert = require("assert");
const deserializer = require("../../../app/models/deserializers/instructor");

describe("unit - deserializer - instructor", function(){
    describe("#deserialize", function(){
        it("can deserialize multiple records", done => {
            var serializedData = deserializer([{
                id: 1,
                start_date: new Date("2017-03-15")
            },{
                id: 2,
                start_date: new Date("2018-03-15")
            }]);
            assert.deepEqual(serializedData, [{
                id: "1",
                start_date: "2017-03-15T00:00:00.000Z"
            },{
                id: "2",
                start_date: "2018-03-15T00:00:00.000Z"
            }]);
            done();
        });
    });
});
