const assert = require("chai").assert;
const serializer = require("../../../app/models/serializers/business-unit");
const businessUnitFixtures = require("../../fixtures/business-units");

describe("unit - serializer - business-unit", function(){
    describe("#JSON-API", function(){
        it("can serialize business units to JSON-API", done => {
            var serializedData = serializer["JSON-API"].serialize(businessUnitFixtures.raw);
            assert.sameDeepMembers(serializedData.data, businessUnitFixtures.JSONAPI.data);
            assert.sameDeepMembers(serializedData.included, businessUnitFixtures.JSONAPI.included);
            done();
        });
    });
});
