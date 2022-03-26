export const ConfigDB = {
  "database": process.env.DB_NAME ?? "test",
  "username": process.env.DB_USER ?? "postgres",
  "password": process.env.DB_PASS ?? "root",
  "host": process.env.DB_HOST ?? "localhost",
  "port": 5432,
  "dialect": "postgres",
  "logging": false,
  //"logging": s => console.log(s), //Show all SQL Script in console
  "define": {
    "charset": "utf8",
    "collate": "utf8_general_ci",
    "timestamps": true
  },
  "dialectOptions": {
    "useUTC": false // for reading from database
  },
  "timezone": "-05:00" // for writing to database
}
