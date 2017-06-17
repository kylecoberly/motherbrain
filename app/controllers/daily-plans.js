require("dotenv").load();

var respond = require("../utils/serialized-response")
    .bind(null, require("../models/serializers/daily-plan"));

var DailyPlan = require("../models/DailyPlan");

module.exports = {
    multiple: function(request, response){
        DailyPlan.getAll()
        .then(respond.bind(null, request, response));
    },
    single: function(request, response){
        DailyPlan.getOne(request.params.daily_plan_id)
        .then(respond.bind(null, request, response));
    }
}
