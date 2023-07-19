const KoaRouter = require('koa-router')
const { create } = require('../controllor/user.contrllor')
const { verifyUser } = require('../middlerware/user.middler')

const userRouter = new KoaRouter({
  prefix: '/user'
})
userRouter.post('/', verifyUser, create)

module.exports = userRouter