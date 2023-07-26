const KoaRouter = require('koa-router')
const Multer = require('koa-multer')
const fs = require('fs')
const { verifyToken } = require('../middlerware/login.middler')
const fileService = require('../service/file.service')
const { upload, queryAttachment } = require('../controllor/file.controllor')

const fileRouter = new KoaRouter({
  prefix: '/file'
})

const fileMulter = Multer({
  dest: './uploads'
})

const fileUpload = fileMulter.single('file')

// 上传附件
fileRouter.post('/upload', verifyToken, fileUpload, upload)

// 查询附件
fileRouter.get('/query_attachment/:fileId', verifyToken, queryAttachment)

module.exports = fileRouter