const jwt = require('jsonwebtoken')
const PRIMARY_KEY = 'ieqwidehkabdjikagsdbajgediuqwewqjhgeqweuqiwyeuiwqejabdamnbvxjadguyaweoiuqdakmngdnajskdiwqa'
class LoginControllor {
  async loginSuccess (ctx) {
    const { name, password } = ctx.request.body
    console.log(ctx.user)
    const { id } = ctx.user
    // 给用户鉴权
    const token = jwt.sign( { id, name, password }, PRIMARY_KEY, {
      expiresIn: 60*60*24,
    })
    // jwt.verify
    
    // 返回登录成功的信息并携带 token
    ctx.body = {
      code: 0,
      message: 'success',
      token
    }
  }
}


module.exports = new LoginControllor()