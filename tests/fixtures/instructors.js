module.exports = {
    raw: [{
        id: 1,
        first_name: "Kyle",
        last_name: "Coberly",
        title: "Faculty Director",
        start_date: "2017-03-15T06:00:00.000Z",
        description: "Description",
        avatar: "www.google.com"
    },{
        id: 2,
        first_name: "Danny",
        last_name: "Fritz",
        title: "Faculty Director",
        start_date: "2018-03-15T06:00:00.000Z",
        description: "Description",
        avatar: "www.google.com"
    }],
    JSONAPI: {
        data: [{
            id: "1",
            type: "instructors",
            attributes: {
                "first-name": "Kyle",
                "last-name": "Coberly",
                "title": "Faculty Director",
                "start-date": "2017-03-15T06:00:00.000Z",
                "description": "Description",
                "avatar": "www.google.com"
            }
        },{
            id: "2",
            type: "instructors",
            attributes: {
                "first-name": "Danny",
                "last-name": "Fritz",
                "title": "Faculty Director",
                "start-date": "2018-03-15T06:00:00.000Z",
                "description": "Description",
                "avatar": "www.google.com"
            }
        }]
    }
}
