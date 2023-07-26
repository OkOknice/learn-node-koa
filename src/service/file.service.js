const connection = require('../database')

class FileService {
  async uploadFile(filename, mimetype,size, userId) {
    const statement = `INSERT INTO files (filename, mimetype,size, user_id) VALUES(?,?,?,?)`
    const result = await connection.execute(statement,[filename, mimetype,size, userId])

    return result[0]
  }
  async queryFile(id) {
    const statement = `SELECT * FROM files where id = ?;`
    const result = await connection.execute(statement, [id])

    return result[0]
  }
}


module.exports = new FileService()