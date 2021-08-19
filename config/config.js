require('dotenv').config();

module.exports = {
  "development": {
    "username": "scott",
    "password": process.env.MYSQL_PASSWORD,
    "database": "sleact",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "scott",
    "password": process.env.MYSQL_PASSWORD,
    "database": "sleact",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "scott",
    "password": process.env.MYSQL_PASSWORD,
    "database": "sleact",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
