const KoaRouter = require('koa-router')
const { verifyToken } = require('../middlerware/login.middler')
const commentService = require('../service/comment.service')
const { createComment, replyComment } = require('../controllor/comment.contrillor')
const { verifyIsHavePremission } = require('../middlerware/moment.middler')

const commentRouter = new KoaRouter({
  prefix: '/comment'
})

// 新增评论
commentRouter.post('/', verifyToken, createComment)

// 回复评论
commentRouter.post('/reply/:commentId', verifyToken, replyComment)





module.exports = commentRouter