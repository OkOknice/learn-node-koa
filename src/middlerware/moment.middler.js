const { NOT_PREMISSION } = require("../config/constants")
const authService = require("../service/auth.service")

const verifyIsHavePremission = async (ctx,next) =>{
  const { momentId } = ctx.request.params
  const { id } = ctx.user
  const isHavePremission = await authService.verifyPremission(momentId, id)
  if(!isHavePremission) {
    return ctx.app.emit('error', NOT_PREMISSION, ctx)
  }
  await next()
}

module.exports = {
  verifyIsHavePremission
}