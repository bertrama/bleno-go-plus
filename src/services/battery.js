var bleno = require('bleno');
var success = bleno.Characteristic.RESULT_SUCCESS;
var data = Buffer.from([0x06,0x00]);

var battery_service = new bleno.PrimaryService({
  uuid: '180f',
  characteristics: [
    // Level
    new bleno.Characteristic({
      uuid: '2a19',
      properties: ['notify', 'read'],
      onSubscribe: function (maxValueSize, updateValueCallback) {
        console.log('Battery: subscribe');
      },
      onReadRequest: function(offset, callback) {
       console.log('battery read');
       return callback(success, Buffer.from([0x60]));
      }
    })
  ]
});

module.exports = battery_service;
