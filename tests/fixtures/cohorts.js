module.exports = {
    raw: [{
        id: 1,
        name: "g1",
        start_date: "2017-01-01T07:00:00.000Z",
        end_date: "2017-07-01T06:00:00.000Z",
        business_unit_id: 1,
        learn_id: 1
    },{
        id: 2,
        name: "g2",
        start_date: "2017-02-01T07:00:00.000Z",
        end_date: "2017-08-01T06:00:00.000Z",
        business_unit_id: 1,
        learn_id: 2
    },{
        id: 3,
        name: "g3",
        start_date: "2017-03-01T07:00:00.000Z",
        end_date: "2017-09-01T06:00:00.000Z",
        business_unit_id: 2,
        learn_id: 3
    }],
    JSONAPI: {
        data: [{
            id: "1",
            type: "cohorts",
            attributes: {
                name: "g1",
                "business-unit-id": 1,
                "start-date": "2017-01-01T07:00:00.000Z",
                "end-date": "2017-07-01T06:00:00.000Z",
                "learn-id": 1
            }
        },{
            id: "2",
            type: "cohorts",
            attributes: {
                name: "g2",
                "business-unit-id": 1,
                "start-date": "2017-02-01T07:00:00.000Z",
                "end-date": "2017-08-01T06:00:00.000Z",
                "learn-id": 2
            }
        },{
            id: "3",
            type: "cohorts",
            attributes: {
                name: "g3",
                "business-unit-id": 2,
                "start-date": "2017-03-01T07:00:00.000Z",
                "end-date": "2017-09-01T06:00:00.000Z",
                "learn-id": 3
            }
        }]
    }
}
