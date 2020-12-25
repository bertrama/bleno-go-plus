var services = [
  require('./services/firmware'),
  require('./services/control'),
  require('./services/certificate'),
  require('./services/battery')
];

module.exports = services;
