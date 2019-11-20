require('dotenv').config();


module.exports = {
    "development": {
      "username": "ganeshkbalaji",
      "password": null,
      "database": "books",
      "host": "127.0.0.1",
      "dialect": "postgres",
      "operatorsAliases": false
    },
    "test": {
      "username": "postgres",
      "password": null,
      "database": "book_test",
      "host": "127.0.0.1",
      "dialect": "postgres",
      "operatorsAliases": false
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorsAliases": false
    }
}
