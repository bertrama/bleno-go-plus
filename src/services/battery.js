var bleno = require('bleno');
var result = bleno.Characteristic.RESULT_SUCCESS;
var data = Buffer.from([0x60]);

var battery_service = new bleno.PrimaryService({
  uuid: '180f',
  characteristics: [
    // Level
    new bleno.Characteristic({
      uuid: '2a19',
      properties: ['read']
    })
  ],
  onReadRequest: function(offset, callback) {
   return callback(result, data);
  }
});

module.exports = battery_service;
