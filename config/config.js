
require('dotenv').config();

module.exports = 


{
  "development": {
    "username": "root",
    "password": "$Casekeenum7",
    "database": "NFL_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}