var bleno = require('bleno');

var certificate_service = new bleno.PrimaryService({
  uuid: 'bbe877095b894433ab7f8b8eef0d8e37',
  characteristics: [
    // CentralToSfida
    new bleno.Characteristic({
      uuid: 'bbe877095b894433ab7f8b8eef0d8e38',
      properties: ['write']
    }),
    // SfidaCommands
    new bleno.Characteristic({
      uuid: 'bbe877095b894433ab7f8b8eef0d8e39',
      properties: ['notify']
    }),
    // SfidaToCentral
    new bleno.Characteristic({
      uuid: 'bbe877095b894433ab7f8b8eef0d8e3a',
      properties: ['read']
    })
  ]
});

module.exports = certificate_service;
