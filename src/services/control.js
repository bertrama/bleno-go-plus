var bleno = require('bleno');

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
      onReadRequest: function (offset, callback) {
        return callback(success, Buffer.from([0]));
      },
      onWriteRequest: function (data, offset, withoutResponse, callback) {
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
      onReadRequest: function (offset, callback) {
        callback(success, Buffer.from([0]));
      },
      onSubscribe: function (maxValueSize, updateValueCallback) {
        notify.push(updateValueCallback);
      },
      onUnsubscribe: function () {
        notify.pop();
      }
    }),
    // Button Notification
    new bleno.Characteristic({
      uuid: '21c5046267cb63a35c4c82b5b9939aee',
      properties: ['write'],
      onReadRequest: function (offset, callback) {
        callback(success, Buffer.from([0]));
      },
      onSubscribe: function (maxValueSize, updateValueCallback) {
        notify.push(updateValueCallback);
      },
      onUnsubscribe: function () {
        notify.pop();
      }
    }),
    // Button Notification
    new bleno.Characteristic({
      uuid: '21c5046267cb63a35c4c82b5b9939aef',
      properties: ['write'],
      onReadRequest: function (offset, callback) {
        callback(success, Buffer.from([0]));
      },
      onSubscribe: function (maxValueSize, updateValueCallback) {
        notify.push(updateValueCallback);
      },
      onUnsubscribe: function () {
        notify.pop();
      }
    }),
    // Button Notification
    new bleno.Characteristic({
      uuid: '21c5046267cb63a35c4c82b5b9939af0',
      properties: ['read'],
      onReadRequest: function (offset, callback) {
        callback(success, Buffer.from([0]));
      },
      onSubscribe: function (maxValueSize, updateValueCallback) {
        notify.push(updateValueCallback);
      },
      onUnsubscribe: function () {
        notify.pop();
      }
    })
  ]
});

module.exports = control_service;
