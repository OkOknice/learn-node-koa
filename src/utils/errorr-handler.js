const { 
  NAME_OR_PASSWORD_IS_NOT_NULL, 
  USER_IS_EXCITS, 
  USER_IS_NULL, 
  PASSWORD_IS_ERROR 
} = require("../config/constants");

// 统一的错误事件管理
const errorHandler = (errorType, ctx) => {
  let code, message
  switch (errorType) {
    case NAME_OR_PASSWORD_IS_NOT_NULL:
      code = 100101
      message = '用户名或密码不能为空~'
      break;
    case USER_IS_EXCITS: 
      code = 100101
      message = '用户名已存在，请重新创建用户'
      break;
    case USER_IS_NULL:
      code = 100102
      message = '用户名不存在'
      break;
    case PASSWORD_IS_ERROR: 
      code = 100103
      message = '密码不正确，请重新输入'
      break;
    default:
      code = 100404
      message = 'NOT FOUND'
      break;
  }
  ctx.body = {
    code,
    message
  }
}

module.exports = errorHandler