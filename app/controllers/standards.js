require("dotenv").load();
var Standard = require("../models/Standard");
var StandardSerializer = require("../models/serializers/standard");

function query(Standard){
    return Standard
        .query()
        .select("standards.id", "description", "success_criteria", "subjects.name AS subject")
        .from("standards")
        .innerJoin("subjects", "subjects.id", "standards.subject_id");
}
function respond(serializer, request, response, data){
    return response.json(
        serializer[
            request.query.serializer || process.env.DEFAULT_SERIALIZER
        ].serialize(data)
    );
}

module.exports = {
    multiple: function(request, response){
        query(Standard)
        .then(respond.bind(null, StandardSerializer, request, response));
    },
    single: function(request, response){
        query(Standard)
            .where("standards.id", request.params.standard_id)
            .first()
        .then(respond.bind(null, StandardSerializer, request, response));
    }
};
