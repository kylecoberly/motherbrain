const assert = require("assert");
const serializer = require("../../../app/models/serializers/business-unit");

describe("unit - serializer - business-unit", function(){
    describe("#JSON-API", function(){
        it("can serialize business units to JSON-API", done => {
            var serializedData = serializer["JSON-API"].serialize([{
                id: 1,
                label: "Denver WDI",
                city: "Denver",
                state: "Colorado"
            },{
                id: 2,
                label: "Miami WDI",
                city: "Miami",
                state: "Florida"
            }]);
            assert.deepEqual(serializedData.data, [{
                id: "1",
                type: "business-units",
                attributes: {
                    label: "Denver WDI",
                    city: "Denver",
                    state: "Colorado"
                }
            },{
                id: "2",
                type: "business-units",
                attributes: {
                    label: "Miami WDI",
                    city: "Miami",
                    state: "Florida"
                }
            }]);
            done();
        });
    });
});
