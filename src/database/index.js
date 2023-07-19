const mysql = require('mysql2')

const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'OKOK_USER',
  user: 'root',
  password: '12345678',
  connectionLimit: 5
})

connections.getConnection((err,conn) => {
  conn.connect(err => {
    if(err) {
      console.log('数据库连接失败')
    } else {
      console.log('数据库连接成功~')
    }
  })
})

module.exports = connections.promise()