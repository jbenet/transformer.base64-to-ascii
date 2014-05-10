var transformer = require('dat-transformer');
var tBase64 = transformer('base64');
var tAscii = transformer('ascii');
// require any other modules you may need here.

module.exports = transformer.Conversion(tBase64, tAscii, convert);

function convert(input) {
  return (new Buffer(input, 'base64')).toString('ascii');
}
