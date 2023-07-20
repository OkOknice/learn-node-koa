const Koa = require('koa')
const bodyParse = require('koa-bodyparser')
const userRouter = require('../routes/user.router')
const loginRouter = require('../routes/login.router')
const errorHandler = require('../utils/errorr-handler')
const { autoReadFiles } = require('../routes')
const app = new Koa()
app.use(bodyParse())
autoReadFiles(app)
// app.use(userRouter.allowedMethods())
// app.use(userRouter.routes())
// app.use(loginRouter.allowedMethods())
// app.use(loginRouter.routes())
// 监听错误
app.on('error', errorHandler)


module.exports  = app