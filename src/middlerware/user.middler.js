const { 
  NAME_OR_PASSWORD_IS_NOT_NULL, 
  USER_IS_EXCITS 
} = require('../config/constants')
const UserService = require('../service/user.service')
const errorEimtHandler = require('../utils/common-error-event')

class UserMiddlerware{
  // 校验注册用户是否存在以及是否为空
  async verifyUser(ctx, next) {
    const user = ctx.request.body
    if(!user.name || !user.password) {
      return errorEimtHandler(NAME_OR_PASSWORD_IS_NOT_NULL, ctx)
    }

    const values = await UserService.getUserByName(user.name)
    if(values.length){
      return errorEimtHandler(USER_IS_EXCITS, ctx)
    }
    await next()
  }
}

module.exports = new UserMiddlerware()