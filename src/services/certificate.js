var bleno = require('bleno');

var certificate_service = new bleno.PrimaryService({
  uuid: 'bbe877095b894433ab7f8b8eef0d8e37',
  characteristics: [
    // SfidaCommands
    new bleno.Characteristic({
      uuid: 'bbe877095b894433ab7f8b8eef0d8e39',
      properties: ['read', 'write', 'notify']
    }),
    // CentralToSfida
    new bleno.Characteristic({
      uuid: 'bbe877095b894433ab7f8b8eef0d8e38',
      properties: ['read', 'write']
    }),
    // SfidaToCentral
    new bleno.Characteristic({
      uuid: 'bbe877095b894433ab7f8b8eef0d8e3a',
      properties: ['read', 'write']
    })
  ]
});

module.exports = certificate_service;
