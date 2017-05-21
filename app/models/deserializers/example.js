const JSONAPIDeserializer = require("jsonapi-serializer").Deserializer;

module.exports = JSONAPIDeserializer({
    some_property: {
        valueForRelationship: function(relationship){
            // Can expand IDs into embedded records and transform attributes
            return {
                id: relationship.id,
                some_nested_property: "Value of Some Nested Property"
            };
        }
    }
}).deserialize;
