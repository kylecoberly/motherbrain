var JSONAPISerializer = require("jsonapi-serializer").Serializer;

module.exports = {
    "JSON-API": new JSONAPISerializer("cohort", {
        attributes: [
            "business_unit_id", "learn_id", "name",
            "start_date", "end_date", "lead_instructor"
        ],
        lead_instructor: {
            ref: "id",
            included: true,
            attributes: [
                "first_name", "last_name", "title",
                "start_date", "description", "avatar"
            ]
        }
    })
};
