const connection = require('../database')

class MomentService {
  // 创建动态
  async createMoment (content, userId) {
    const statement = `INSERT INTO moment (content, user_id) VALUES (?, ?);`
    const result = await connection.execute(statement, [content, userId])
    return result[0]
  }

  // 查询动态数据
  async selectMomentList (pageNo, pageSize) {
    const startOffset = (pageNo - 1) * pageSize
    const endOffset = pageSize * pageNo
    try {
      const statement = `SELECT * FROM moment LIMIT ?,?;`
      const result = await connection.execute(statement, [`${startOffset}`,`${endOffset}`])
      const allData = await this.selectAllData()
      // console.log(totalCount,"@222")
      return {
        lists: result[0],
        totalCount: allData.length,
        pageNo,
        pageSize,
        // pageCount: 
      }
    } catch (error) {
      console.log(error)
    }
  }
  // 查询所有数据
  async selectAllData() {
    const statement = `SELECT * FROM moment`
    const result = await connection.execute(statement)
    return result[0]
  }

  // 更新动态内容
  async updateMomet(content ,momentId) {
    const statement = `UPDATE moment SET content=? WHERE id=?;`
    const result = await connection.execute(statement, [content,momentId])
  }

  // 删除动态
  async removeMoment(momentId) {
    const statement = `DELETE FROM moment WHERE id=?;`
    const result = connection.execute(statement, [momentId])
    return result[0]
  }

  // async getCommentsByMomentId()
}

module.exports = new MomentService()