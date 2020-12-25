var bleno = require('bleno');
var services = require('./services');
var name  = "Pokemon GO Plus";
var serviceUuids = services.map(function(svc) { return svc.uuid });

bleno.setServices(services);

bleno.on('advertisingStart', function(error) {
  console.log('advertisingStart: ' + error);
});

bleno.on('advertisingStartError', function(error) {
  console.log('advertisingStartError: ' + error);
});

bleno.on('advertisingStop', function(error) {
  console.log('advertisingStop: ' + error);
});

bleno.on('accept', function(error) {
  console.log('accept: ' + error);
});

bleno.on('disconnect', function(error) {
  console.log('disconnect: ' + error);
});

bleno.on('stateChange', function(state) {
  console.log('on -> stateChange: ' + state + "\n");
  if (state === 'poweredOn') {

    console.log('Advertising ' + name);
    console.log('  ' + serviceUuids.join("\n  "));
    console.log([services[0].uuid]);

    bleno.startAdvertising(name, [services[0].uuid], function (error) {
      console.log('startAdvertising: ' + error);
    });
  }
  else {
    bleno.stopAdvertising();
  }
});


