var JSONAPISerializer = require("jsonapi-serializer").Serializer;

module.exports = {
    "JSON-API": new JSONAPISerializer("standard", {
        attributes: ["description", "success_criteria", "subject"]
    })
};
