var toPull = require('stream-to-pull-stream')

function loud (err) { throw err }

exports.stdin = stdin
exports.stdout = stdout
exports.stderr = stderr

function stdin (options) {
  options = Object.assign({
    encoding: 'utf8'
  }, options || {})

  if (options.encoding) {
    process.stdin.setEncoding(options.encoding)
  }

  return toPull.source(process.stdin)
}

function stdout (cb) {
  if (!cb) cb = loud
  return toPull.sink(process.stdout, cb)
}

function stderr (cb) {
  if (!cb) cb = loud
  return toPull.sink(process.stderr, cb)
}
