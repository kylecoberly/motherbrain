require("dotenv").load();

var respond = require("../utils/serialized-response")
    .bind(null, require("../models/serializers/business-unit"));

var BusinessUnit = require("../models/BusinessUnit.js");

module.exports = {
    multiple: function(request, response){
        BusinessUnit.getAllWithRelations().then(respond.bind(null, request, response));
    },
    single: function(request, response){
        BusinessUnit.getOneWithRelations(request.params.business_unit_id)
        .then(respond.bind(null, request, response));
    }
};
