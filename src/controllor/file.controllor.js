const fs = require('fs')
const fileService = require("../service/file.service")

class FileControllor {
  async upload(ctx) {
    const { filename, size, mimetype } = ctx.req.file
    const { id } = ctx.user
    const result = await fileService.uploadFile(filename, mimetype,size, id)
    ctx.body = {
      code: 0,
      message: 'success',
      data: '上传附件成功',
      result
    }
  }
  async queryAttachment(ctx) {
    const { fileId } = ctx.params
    const result = await fileService.queryFile(fileId)
    ctx.response.set('content-type', result[0].mimetype)
    ctx.body = fs.createReadStream(`./uploads/${result[0].filename}`)
  }
}


module.exports = new FileControllor()