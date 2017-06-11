var JSONAPISerializer = require("jsonapi-serializer").Serializer;

module.exports = {
    "JSON-API": new JSONAPISerializer("cohort", {
        attributes: ["business_unit_id", "learn_id", "name", "start_date", "end_date"]
    })
};
