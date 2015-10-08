var assert = require('assert')
var curl = require('.')
var tests = require('straight-to-curly-quotes')

// Replace quotation marks with text descriptions for easy comparison by eye.
function asciify(string) {
  return string
    .replace(/"/g, '{Straight Double}')
    .replace(/'/g, '{Straight Single}')
    .replace(/“/g, '{Left Double}')
    .replace(/”/g, '{Right Double}')
    .replace(/‘/g, '{Left Single}')
    .replace(/’/g, '{Right Single}') }

function error(string) {
  process.stderr.write(string + '\n') }

// For each of the straight-to-curly-quotes tests...
tests.forEach(function(test) {
  try {
    assert.equal(curl(test.straight), test.curly) }
  catch (e) {
    error('Actual:   ' + asciify(curl(test.straight)))
    error('Expected: ' + asciify(test.curly))
    process.exit(1) } })
