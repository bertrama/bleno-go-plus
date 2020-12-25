var bleno = require('bleno');
var result = bleno.Characteristic.RESULT_SUCCESS;
var data = Buffer.from('60');

var battery_service = new bleno.PrimaryService({
  uuid: '0000180f00001000800000805f9b34fb',
  characteristics: [
    // Level
    new bleno.Characteristic({
      uuid: '00002a1900001000800000805f9b34fb',
      properties: ['read']
    })
  ],
  onReadRequest: function(offset, callback) {
   return callback(result, data);
  }
});

module.exports = battery_service;
