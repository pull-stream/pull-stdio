var toPull = require('stream-to-pull-stream')
var pull = require('pull-stream')

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
    stringify: true
  }, options || {})

  // Turn process.stdin into source pull stream
  var source = toPull.source(process.stdin)

  // Handle `options.stringify`
  if (options.stringify) {
    return pull(source, pull.map(data => {
      if (options.toString) return data.toString()
      else return data
    }))
  }

  // Return source if no options
  return source
}

/**
 * Output stdout/stderr as a pull stream
 * ```js
 * pull(..., stdout())
 * pull(..., stderr())
 * ```
 */
function stdout () { return toPull.sink(process.stdout) }
function stderr () { return toPull.sink(process.stderr) }
