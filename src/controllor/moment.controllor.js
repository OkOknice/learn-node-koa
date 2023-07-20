const momentService = require("../service/moment.service")

class MomentControllor {
  // 创建动态
  async createMoment(ctx) {
    const { content } = ctx.request.body
    const uesrId = ctx.user.id
    const result = await momentService.createMoment(content, uesrId)
    ctx.body = {
      code: 0,
      message: 'success',
      data: result
    }
  }
  // 查询动态
  async selectMomentList(ctx) {
    const { pageNo, pageSize } = ctx.request.query
    const result = await momentService.selectMomentList(pageNo, pageSize)
    ctx.body = {
      code: 0,
      message: 'success',
      data: result
    }
  }
  // 更新动态
  async updateMoment(ctx) {
    const { momentId } = ctx.request.params
    const { content }= ctx.request.body
    const result = await momentService.updateMomet(content,momentId)
    ctx.body = {
      code: 0,
      message: 'success',
      data: '更新成功'
    }
  }
  // 删除动态
  async removeMoment(ctx) {
    const { momentId } = ctx.request.params
    const result = momentService.removeMoment(momentId)
    ctx.body = {
      code: 0,
      message: 'success',
      data: '删除成功'
    }
  }
}

module.exports = new MomentControllor()