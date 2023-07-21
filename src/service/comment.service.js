const connection = require('../database')

class CommentService {
  async createComment(content, momentId, userId) {
    const statement = `INSERT INTO comment (content, moment_id, user_id) VALUES(?,?,?);`
    const result = await connection.execute(statement, [content, momentId, userId])
    return result[0]
  }
  async replyComment(content, commentId, momentId, userId) {
    const statement = `INSERT INTO comment (content, comment_id, moment_id, user_id) VALUES(?,?,?,?)`
    const result = await connection.execute(statement, [content, commentId, momentId, userId])
    return result[0]
  }
}

module.exports = new CommentService()