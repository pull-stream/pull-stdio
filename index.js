var toPull = require('stream-to-pull-stream')

exports.stdin = stdin
exports.stdout = stdout
exports.stderr = stderr

/**
 * Handle process.stdin as a pull stream
 * ```js
 * pull(stdin(), ...)
 * ```
 */
function stdin (options) {
  options = Object.assign({
    encoding: 'utf8'
  }, options || {})

  // Handle `options.stringify`
  if (options.encoding) {
    process.stdin.setEncoding(options.encoding)
  }

  // Turn process.stdin into source pull stream
  return toPull.source(process.stdin)
}

/**
 * Output stdout/stderr as a pull stream
 * ```js
 * pull(..., stdout())
 * pull(..., stderr())
 * ```
 */
function stdout (cb) { return toPull.sink(process.stdout, cb) }
function stderr (cb) { return toPull.sink(process.stderr, cb) }
