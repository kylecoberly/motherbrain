require("dotenv").load();
var Cohort = require("../models/Cohort");
var CohortSerializer = require("../models/serializers/cohort");

module.exports = function(request, response){
    Cohort.getCohort(request.params.cohort_id)
    .then(cohorts => {
        response.json(
            CohortSerializer[
                request.query.serializer || process.env.DEFAULT_SERIALIZER
            ].serialize(cohorts)
        );
    });
};
