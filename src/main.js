const app = require('./app')
require('./database')

app.listen(8000, () => {
  console.log('启动服务器成功🚀')
})