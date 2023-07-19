const errorEimtHandler = (errorType, ctx) => {
  ctx.app.emit('error', errorType, ctx)
}

module.exports = errorEimtHandler