require("dotenv").config()
module.exports={
    "development": {
      username: "root",
      password: process.env.MY_PASSWORD,
      database: "universities",
      host: "127.0.0.1",
      port: 3306,
      dialect: "mysql"
    },
    "production": {
      username: "root",
      password: null,
      database: "database_production",
      host: "127.0.0.1",
      port: 3306,
      dialect: "mysql"
    }
}
