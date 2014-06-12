var Conversion = require('transformer-conversion');
var tBase64 = require('transformer.base64');
var tAscii = require('transformer.ascii');
// require any other modules you may need here.

module.exports = Conversion(tBase64, tAscii, convert);

function convert(input) {
  return (new Buffer(input, 'base64')).toString('ascii');
}
