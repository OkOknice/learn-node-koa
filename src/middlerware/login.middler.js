const { 
  NAME_OR_PASSWORD_IS_NOT_NULL, 
  USER_IS_NULL, 
  PASSWORD_IS_ERROR, 
  TOKEN_LOSE_EFFICACY
} = require("../config/constants")
const userService = require("../service/user.service")
const errorEimtHandler = require("../utils/common-error-event")
const md5password = require("../utils/password-handler")
const jwt = require('jsonwebtoken')
const PRIMARY_KEY = 'ieqwidehkabdjikagsdbajgediuqwewqjhgeqweuqiwyeuiwqejabdamnbvxjadguyaweoiuqdakmngdnajskdiwqa'

// 登录校验
const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body
  // 1、先校验用户名和密码是否为空
  if( !name || !password) {
    return errorEimtHandler(NAME_OR_PASSWORD_IS_NOT_NULL ,ctx)
  }
  // 2、校验用户名是否存在
  const users = await userService.getUserByName(name)
  if(!users.length) {
    return errorEimtHandler(USER_IS_NULL ,ctx)
  }
  // 3、检验用户密码是否准确
  if(users[0].password !== md5password(password)) {
    return errorEimtHandler(PASSWORD_IS_ERROR ,ctx)
  }
  ctx.user = users[0]

  await next()
}

// 校验 token 是否过期
const verifyToken = async (ctx, next) => {
  const authorization = ctx.headers.authorization
  if(!authorization) {
    return ctx.app.emit('error', TOKEN_LOSE_EFFICACY, ctx)
  }
  const token = authorization.replace('Bearer ', '')
  try {
    const result = jwt.verify(token, PRIMARY_KEY)
    ctx.user = result
    await next()
  } catch (error) {
    ctx.app.emit('error', TOKEN_LOSE_EFFICACY, ctx)
  }

}

module.exports = {
  verifyLogin,
  verifyToken
}