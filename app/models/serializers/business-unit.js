var JSONAPISerializer = require("jsonapi-serializer").Serializer;

module.exports = {
    "JSON-API": new JSONAPISerializer("business-unit", {
        attributes: ["label", "city", "state"],
    })
};
