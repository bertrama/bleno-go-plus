var bleno = require('bleno');

var success = bleno.Characteristic.RESULT_SUCCESS;

var certificate_service = new bleno.PrimaryService({
  uuid: 'bbe877095b894433ab7f8b8eef0d8e37',
  characteristics: [
    // CentralToSfida
    new bleno.Characteristic({
      uuid: 'bbe877095b894433ab7f8b8eef0d8e38',
      properties: ['write'],
      onWriteRequest: function (data, offset, withoutResponse, callback) {
        console.log(['write', data, offset, withoutResponse, callback]);
        if (!withoutResponse) {
          return callback(success);
        }
      }
    }),
    // SfidaCommands
    new bleno.Characteristic({
      uuid: 'bbe877095b894433ab7f8b8eef0d8e39',
      properties: ['notify'],
      onSubscribe: function(maxValueSize, updateValueCallback) {
        console.log('subscribed');
      }
    }),
    // SfidaToCentral
    new bleno.Characteristic({
      uuid: 'bbe877095b894433ab7f8b8eef0d8e3a',
      properties: ['read'],
      onReadRequest: function (offset, callback) {
        console.log(['read', offset, callback]);
        return callback(success, Buffer.from([0]));
      },
    })
  ]
});

module.exports = certificate_service;
