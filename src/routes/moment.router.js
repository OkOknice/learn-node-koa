const KoaRouter = require('koa-router')
const { verifyToken } = require('../middlerware/login.middler')
const momentService = require('../service/moment.service')
const { createMoment, selectMomentList, updateMoment, removeMoment } = require('../controllor/moment.controllor')
const { verifyIsHavePremission } = require('../middlerware/moment.middler')

const momentRouter = new KoaRouter({
  prefix: '/moment'
})

// 添加动态 
momentRouter.post('/', verifyToken, createMoment)

// 查询动态列表
momentRouter.get('/list', selectMomentList)

// 更新动态列表数据
momentRouter.post('/update/:momentId', verifyToken, verifyIsHavePremission, updateMoment)

// 删除动态数据
momentRouter.get('/remove/:momentId', verifyToken, verifyIsHavePremission, removeMoment)



module.exports = momentRouter