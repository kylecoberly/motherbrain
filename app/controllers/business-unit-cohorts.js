require("dotenv").load();
var Cohort = require("../models/Cohort");
var CohortSerializer = require("../models/serializers/cohort");

module.exports = function(request, response){
    Cohort.getCohortByBusinessUnit(request.params.business_unit_id)
    .then(cohorts => {
        response.json(
            CohortSerializer[
                request.query.serializer || process.env.DEFAULT_SERIALIZER
            ].serialize(cohorts)
        );
    });
};
