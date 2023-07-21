const { NOT_PREMISSION } = require("../config/constants")
const authService = require("../service/auth.service")

const verifyIsHavePremission = async (ctx,next) =>{
  // const { momentId } = ctx.request.params
  const [resoruceKey] = Object.keys(ctx.request.params)
  const tabsKeyName = resoruceKey.replace('Id', '')
  const resourceId = ctx.request.params[resoruceKey]
  const { id } = ctx.user
  const isHavePremission = await authService.verifyPremission(tabsKeyName, resourceId, id)
  if(!isHavePremission) {
    return ctx.app.emit('error', NOT_PREMISSION, ctx)
  }
  await next()
}

module.exports = {
  verifyIsHavePremission
}