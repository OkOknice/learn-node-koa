const connection = require('../database')

class AuthService {
  async verifyPremission(momentId, userId) {
    const statement = `SELECT * FROM moment m WHERE m.id =? AND m.user_id=?;`
    const result = await connection.execute(statement, [momentId,userId])
    return result[0].length ? true : false
  }
}

module.exports = new AuthService()