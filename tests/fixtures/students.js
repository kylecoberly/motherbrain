module.exports = {
  raw: [

  ],
  JSONAPI: {
    // Ex: /cohorts/1/students
    cohort1Students: {
      data: [
        {
          "type": "students",
          "id": "1",
          "attributes": {
            "first-name": "Kyle",
            "last-name": "Coberly",
            "email": "kyle.coberly@gmail.com",
            "phone": "777-777-7777",
            "twitter": "kylecoberly",
            "github": "kylecoberly",
            "linkedin": "kylecoberly",
            "galvanize-id": 1,
            "avatar": "https://www.google.com"
          }
        },
        {
          "type": "students",
          "id": "2",
          "attributes": {
            "first-name": "Danny",
            "last-name": "Fritz",
            "email": "danny.fritz@gmail.com",
            "phone": "777-777-7777",
            "twitter": "dannyfritz",
            "github": "dannyfritz",
            "linkedin": "dannyfritz",
            "galvanize-id": 2,
            "avatar": "https://www.google.com"
          }
        }
      ]
    }
  }
}
