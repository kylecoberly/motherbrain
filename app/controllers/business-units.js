require("dotenv").load();
var BusinessUnit = require("../models/BusinessUnit");
var BusinessUnitSerializer = require("../models/serializers/business-unit");

module.exports = function(request, response){
    BusinessUnit
        .query()
        .select("id", "label", "city", "state")
    .then(businessUnits => {
        response.json(
            BusinessUnitSerializer[
                request.query.serializer || process.env.DEFAULT_SERIALIZER
            ].serialize(businessUnits)
        );
    });
};
