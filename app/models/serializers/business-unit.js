var JSONAPISerializer = require("jsonapi-serializer").Serializer;

module.exports = {
    "JSON-API": new JSONAPISerializer("business-unit", {
        attributes: ["label", "city", "state", "cohorts", "instructors"],
        cohorts: {
            ref: "id",
            included: true,
            attributes: ["name", "start_date", "end_date", "business_unit_id", "learn_id"]
        },
        instructors: {
            ref: "id",
            included: true,
            attributes: ["first_name", "last_name", "title",
                        "start_date", "description", "avatar"]
        }
    })
};
