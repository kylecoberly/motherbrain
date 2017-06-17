var JSONAPISerializer = require("jsonapi-serializer").Serializer;

module.exports = {
    "JSON-API": new JSONAPISerializer("daily-plan", {
        attributes: [
            "cohort_id",
            "date",
            "description",
            "title"
        ]
    })
};
