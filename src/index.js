var bleno = require('@abandonware/bleno');
var services = require('./services');
var secrets = require('./secrets');
var config = require('./config');

bleno.setServices(services, function(error) {
  console.log('setServices: ' + error);
});

bleno.on('advertisingStart', function(error) {
  console.log('advertisingStart: ' + error);
});

bleno.on('advertisingStartError', function(error) {
  console.log('advertisingStartError: ' + error);
});

bleno.on('advertisingStop', function(error) {
  console.log('advertisingStop: ' + error);
});

bleno.on('accept', function(clientAddress) {
  console.log('accept: ' + clientAddress);
});

bleno.on('disconnect', function(clientAddress) {
  console.log('disconnect: ' + clientAddress);
});

bleno.on('stateChange', function(state) {
  console.log('on -> stateChange: ' + state + "\n");
  if (state === 'poweredOn') {

    console.log('Advertising ' + config.name);
    console.log([services[0].uuid]);

    bleno.startAdvertisingWithEIRData(
      config.advertisementData,
      config.scanData,
      function (error) { console.log('startAdvertisingWithEIRData: ' + error); }
    );
  }
  else {
    bleno.stopAdvertising();
  }
});
