const cohorts = require("./cohorts");
const instructors = require("./instructors");

module.exports = {
    raw: [{
        id: 1,
        label: "Denver WDI",
        city: "Denver",
        state: "Colorado",
        cohorts: [cohorts.raw[0], cohorts.raw[1]],
        instructors: [instructors.raw[0], instructors.raw[1]]
    },{
        id: 2,
        label: "Miami WDI",
        city: "Miami",
        state: "Florida",
        cohorts: [cohorts.raw[2]],
        instructors: []
    }],
    JSONAPI: {
        data: [{
            id: "1",
            type: "business-units",
            attributes: {
                label: "Denver WDI",
                city: "Denver",
                state: "Colorado"
            },
            relationships: {
                cohorts: {
                    data: [{
                        type: "cohorts",
                        id: "1"
                    },{
                        type: "cohorts",
                        id: "2"
                    }]
                },
                instructors: {
                    data: [{
                        type: "instructors",
                        id: "1"
                    },{
                        type: "instructors",
                        id: "2"
                    }]
                }
            }
        },{
            id: "2",
            type: "business-units",
            attributes: {
                label: "Miami WDI",
                city: "Miami",
                state: "Florida"
            },
            relationships: {
                cohorts: {
                    data: [{
                        type: "cohorts",
                        id: "3"
                    }]
                },
                instructors: {
                    data: []
                }
            }
        }],
        included: [...cohorts.JSONAPI.data, ...instructors.JSONAPI.data]
    }
}
