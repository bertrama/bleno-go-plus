var advertisementDataArray = [
  0x02, 0x01, 0x06,
  0x10, 0x09, 'P', 'o', 'k', 'e', 'm', 'o', 'n', ' ', 'G', 'O', ' ', 'P', 'l', 'u', 's',
  0x06, 0x20, 0x62, 0x04, 0xC5, 0x21, 0x00
];
var advertisementData = new Buffer(advertisementDataArray.length);
for (var i = 0; i < 5; ++i) {
  advertisementData.writeUInt8(advertisementDataArray[i], i);
}
for (var i =5; i < advertisementDataArray.length - 7; ++i) {
  advertisementData.write(advertisementDataArray[i], i);
}
for (var i = advertisementDataArray.length-7; i < advertisementDataArray.length; ++i) {
  advertisementData.writeUInt8(advertisementDataArray[i], i);
}

var scanDataArray = [
  /* flags */
  0x02, 0x01, 0x06,
  /* tx power */
  0x02, 0x0a, 0xeb,
  /* service uuid */
  0x03, 0x03, 0xFF,0x00
];

var scanData = new Buffer(scanDataArray.length);
for (var i=0; i < scanDataArray.length; ++i) {
  scanData.writeUInt8(scanDataArray[i], i);
}


var config = {
  'name': 'Pokemon Go Plus',
  'advertisementData': advertisementData,
  'scanData': scanData,
};

module.exports = config;
