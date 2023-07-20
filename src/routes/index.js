const fs = require('fs')
const path = require('path')

const autoReadFiles = (app) => {
  const files = fs.readdirSync(__dirname)
  files.forEach(file => {
    if(file === 'index.js') return
    const router = require(`./${file}`)
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}

module.exports = {
  autoReadFiles
}