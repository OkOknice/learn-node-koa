const KoaRouter = require('koa-router')
const { verifyLogin, verifyToken } = require('../middlerware/login.middler')
const { loginSuccess } = require('../controllor/login.controllor')

const loginRouter = new KoaRouter({ prefix: '/login' })

loginRouter.post('/', verifyLogin, loginSuccess)

// loginRouter.get('/test', verifyToken, (ctx ) =>{
  
//   ctx.body = '23213'
// })


module.exports = loginRouter