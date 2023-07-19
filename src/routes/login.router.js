const KoaRouter = require('koa-router')
const { verifyLogin } = require('../middlerware/login.middler')
const { loginSuccess } = require('../controllor/login.controllor')

const loginRouter = new KoaRouter({ prefix: '/login' })

loginRouter.post('/', verifyLogin, loginSuccess)


module.exports = loginRouter