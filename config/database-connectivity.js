require("dotenv").config();

const pgtools = require("pgtools");

const config = {
  user: process.env.PGUSER || "postgres",
  password: process.env.PGPASSWORD || "mishal",
  port: process.env.PGPORT || 5432,
  host: process.env.PGHOST || "localhost",
};

pgtools.createdb(
  config,
  process.env.PGDATABASE,
  function (err, res) {
    console.log("databse name is", process.env.PGDATABASE);
    if (err) {
      console.error(err);
      process.exit(-1);
    }
    console.log(res);
  }
);
