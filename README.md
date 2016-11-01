# pull-stdio [![NPM version](https://badge.fury.io/js/pull-stdio.svg)](https://npmjs.org/package/pull-stdio) [![Build Status](https://travis-ci.org/jamen/pull-stdio.svg?branch=master)](https://travis-ci.org/jamen/pull-stdio)

> Stdio functions for pull streams.

```js
var { stdin, stdout, stderr } = require('pull-stdio')

pull(
  // Source stream for stdin
  stdin(),
  // Sink stream for stdout
  stdout()
)

// Also a sink stream for stderr
pull(
  pull.values(['Error', 'blahlbah']),
  stderr()
)
```

This module is a simple wrapper around [`stream-to-pull-stream`](https://npmjs.com/stream-to-pull-stream) on the native `process.stdio` streams.  If you have any further ideas for this module feel free to open an issue.

## Installation

```sh
$ npm install --save pull-stdio
```

## Usage

### `stdio.{method}`

The object which contains the stdio functions `stdin`, `stdout`, and `stderr` for pull streams.

#### Example

```js
var stdio = require('pull-stdio')

pull(
  stdio.stdin()
  // ...
)
```

### `stdin([options])`

A [source pull stream](https://github.com/pull-stream/pull-stream/blob/master/docs/glossary.md#source) for Node's `process.stdin`.

#### Options

 - `encoding` (`String`|`false`): Set the `process.stdin` encoding, or to `false`.  Defaults to `'utf8'`.

#### Example

```js
pull(
  stdin({ encoding: false }),
  // ...
)
```

### `stdout()`

A [sink stream](https://github.com/pull-stream/pull-stream/blob/master/docs/glossary.md#sink) for Node's `process.stdout`.

#### Example

```js
pull(
  // Source data somewhere
  // Output to stdout:
  stdout()
)
```

### `stderr()`

A [sink stream](https://github.com/pull-stream/pull-stream/blob/master/docs/glossary.md#sink) for Node's `process.stderr`.

#### Example

```js
pull(
  // Source data somewhere
  // Output to stderr:
  stderr()
)
```

## License

MIT © [Jamen Marz](https://github.com/jamen)
