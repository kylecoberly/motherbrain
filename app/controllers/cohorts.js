require("dotenv").load();

var respond = require("../utils/serialized-response")
    .bind(null, require("../models/serializers/cohort"));

var Cohort = require("../models/Cohort");

module.exports = {
    single: function(request, response){
        Cohort.getOne(request.params.cohort_id)
        .then(respond.bind(null, request, response));
    },
    byBusinessUnit: function(request, response){
        Cohort.getOneByBusinessUnit(request.params.business_unit_id)
        .then(respond.bind(null, request, response));
    }
}
