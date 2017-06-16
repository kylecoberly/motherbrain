var JSONAPISerializer = require("jsonapi-serializer").Serializer;

module.exports = {
    "JSON-API": new JSONAPISerializer("student", {
        attributes: [
            "first_name",
            "last_name",
            "email",
            "phone",
            "twitter",
            "github",
            "linkedin",
            "galvanize_id",
            "avatar"
        ]
    })
};
