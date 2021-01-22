// dbConfig.js
const mysql = require('mysql')
const pool  = mysql.createPool({
  host            : 'db-des-pcyll.ciggpldtewva.us-east-1.rds.amazonaws.com',
  user            : 'admin',
  password        : 'restaurant',
  database        : 'prod_atualcanceperu',
})

module.exports = pool