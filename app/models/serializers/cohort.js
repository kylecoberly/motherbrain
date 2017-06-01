var JSONAPISerializer = require("jsonapi-serializer").Serializer;

module.exports = {
    "JSON-API": new JSONAPISerializer("cohort", {
        attributes: ["business-unit-id", "learn-id", "name", "start_date", "end_date"]
    })
};
