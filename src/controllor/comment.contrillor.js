const commentService = require("../service/comment.service")

class CommentControllor{
  // 创建评论
  async createComment(ctx) {
    const { content, momentId } = ctx.request.body
    const { id } = ctx.user
    const result = await commentService.createComment(content, momentId, id)
    console.log(result)
    ctx.body = {
      code: 0,
      message: 'success',
      data: result
    }
  }
  // 回复评论
  async replyComment(ctx) {
    const { commentId } = ctx.request.params
    const { content, momentId } = ctx.request.body
    const { id } = ctx.user
  
    const result = await commentService.replyComment(content, commentId, momentId, id)
    ctx.body = {
      code: 0,
      message: 'success',
      data: result
    }
  }
}

module.exports = new CommentControllor()