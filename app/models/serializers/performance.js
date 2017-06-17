var JSONAPISerializer = require("jsonapi-serializer").Serializer;

module.exports = {
    "JSON-API": new JSONAPISerializer("performance", {
        attributes: [
            "user_id",
            "standard_id",
            "score",
            "updator_id"
        ]
    })
};
