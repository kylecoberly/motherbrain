var JSONAPISerializer = require("jsonapi-serializer").Serializer;

var students = new JSONAPISerializer("example", {
    attributes: ["some_property", "example"],
    example: {
        ref: "id",
        id: "id",
        included: true,
        attributes: ["some_related_property"]
    }
});
