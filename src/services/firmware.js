var bleno = require('bleno');
var firmware_service = new bleno.PrimaryService({
  uuid: '0000fef500001000800000805f9b34fb',
  characteristics: [
    // UpdateRequest
    new bleno.Characteristic({
      uuid: '21c5046267cb63a35c4c82b5b9939aef',
      properties: ['read', 'write']
    }),
    // Version
    new bleno.Characteristic({
      uuid: '21c5046267cb63a35c4c82b5b9939af0',
      properties: ['read', 'write']
    })
  ]
});

module.exports = firmware_service;
