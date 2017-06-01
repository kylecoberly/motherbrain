const CONFIG = require("../knexfile")[process.env.LEARN_ENV || "learn_development"];
module.exports = require("knex")(CONFIG);
