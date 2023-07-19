const { 
  NAME_OR_PASSWORD_IS_NOT_NULL, 
  USER_IS_NULL, 
  PASSWORD_IS_ERROR 
} = require("../config/constants")
const userService = require("../service/user.service")
const errorEimtHandler = require("../utils/common-error-event")
const md5password = require("../utils/password-handler")

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

  await next()
}

module.exports = {
  verifyLogin
}