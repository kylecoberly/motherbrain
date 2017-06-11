require("dotenv").load();

var respond = require("../utils/serialized-response")
    .bind(null, require("../models/serializers/standard"));

var Standard = require("../models/Standard");

module.exports = {
    multiple: function(request, response){
        Standard.getAll().then(respond.bind(null, request, response));
    },
    single: function(request, response){
        Standard.getOne(request.params.standard_id)
        .then(respond.bind(null, request, response));
    }
};
