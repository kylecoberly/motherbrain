var JSONAPISerializer = require("jsonapi-serializer").Serializer;

module.exports = {
    "JSON-API": new JSONAPISerializer("instructor", {
        attributes: [
            "first_name",
            "last_name",
            "title",
            "start_date",
            "description",
            "avatar"
        ]
    })
};
