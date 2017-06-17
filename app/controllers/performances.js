require("dotenv").load();

var respond = require("../utils/serialized-response")
    .bind(null, require("../models/serializers/performance"));

var Performance = require("../models/Performance");

module.exports = {
    multiple: function(request, response){
        Performance.getAll()
        .then(respond.bind(null, request, response));
    },
    single: function(request, response){
        Performance.getOne(request.params.performance_id)
        .then(respond.bind(null, request, response));
    }
}
