require("dotenv").load();

var respond = require("../utils/serialized-response")
    .bind(null, require("../models/serializers/instructor"));

var Instructor = require("../models/Instructor");

module.exports = {
    multiple: function(request, response){
        Instructor.getAll()
        .then(respond.bind(null, request, response));
    },
    single: function(request, response){
        Instructor.getOne(request.params.instructor_id)
        .then(respond.bind(null, request, response));
    }
}
