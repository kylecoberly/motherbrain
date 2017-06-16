require("dotenv").load();

var respond = require("../utils/serialized-response")
    .bind(null, require("../models/serializers/student"));

var Student = require("../models/Student");

module.exports = {
    multiple: function(request, response){
        Student.getAll()
        .then(respond.bind(null, request, response));
    },
    single: function(request, response){
        Student.getOne(request.params.student_id)
        .then(respond.bind(null, request, response));
    }
}
