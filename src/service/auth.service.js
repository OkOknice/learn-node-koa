const connection = require('../database')

class AuthService {
  async verifyPremission(tabsKeyName,resourceId, userId) {
    const statement = `SELECT * FROM ${tabsKeyName} m WHERE m.id =? AND m.user_id=?;`
    const result = await connection.execute(statement, [resourceId,userId])
    return result[0].length ? true : false
  }
}

module.exports = new AuthService()