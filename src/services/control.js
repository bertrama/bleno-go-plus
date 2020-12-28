var bleno = require('@abandonware/bleno');

var success = bleno.Characteristic.RESULT_SUCCESS;
var notify = [];
var button_press = Buffer.from([0x03, 0xff]);
var button_release = Buffer.from([0, 0]);

var control_service = new bleno.PrimaryService({
  uuid: '21c5046267cb63a35c4c82b5b9939aeb',
  characteristics: [
    // LED Vibrate
    new bleno.Characteristic({
      uuid: '21c5046267cb63a35c4c82b5b9939aec',
      properties: ['write'],
      onWriteRequest: function (data, offset, withoutResponse, callback) {
        console.log('LED Vibrate: write');
        notify.map(function(fn) { fn(button); });
        if (!withoutResponse) {
          return callback(success);
        }
      }
    }),
    // Button Notification
    new bleno.Characteristic({
      uuid: '21c5046267cb63a35c4c82b5b9939aed',
      properties: ['notify'],
      onSubscribe: function (maxValueSize, updateValueCallback) {
        console.log('Button: subscribe');
        notify.push(updateValueCallback);
      }
    }),
    // Button Notification
    new bleno.Characteristic({
      uuid: '21c5046267cb63a35c4c82b5b9939aee',
      properties: ['write'],
      onWriteRequest: function (data, offset, withoutResponse, callback) {
        console.log('Button2: write');
        if (!withoutResponse) {
          return callback(success);
        }
      }
    }),
    // Button Notification
    new bleno.Characteristic({
      uuid: '21c5046267cb63a35c4c82b5b9939aef',
      properties: ['write'],
      onWriteRequest: function (data, offset, withoutResponse, callback) {
        console.log('Button3: write');
        if (!withoutResponse) {
          return callback(success);
        }
      }
    }),
    // Button Notification
    new bleno.Characteristic({
      uuid: '21c5046267cb63a35c4c82b5b9939af0',
      properties: ['read'],
      onReadRequest: function (offset, callback) {
        console.log('Button4: read');
        callback(success, Buffer.from([0]));
      }
    })
  ]
});

module.exports = control_service;
