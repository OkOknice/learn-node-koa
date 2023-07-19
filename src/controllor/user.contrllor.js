const UserService = require('../service/user.service')
const md5password = require('../utils/password-handler')
class UserController {
  async create(ctx, next) {
    const password = ctx.request.body.password
    ctx.request.body.password = md5password(password)
    const user = ctx.request.body
     
    const result = await UserService.create(user)
    ctx.body = {
      code: 0,
      data: result,
      message: 'success'
    }
  }

}

module.exports = new UserController()