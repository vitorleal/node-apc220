var APC220 = require('./lib/apc220'),
    apc220 = new APC220();

//Connect to the apc220
apc220.connect();

//Send some data
apc220.write('test');

apc220.on('data', function (data) {
  console.log(data);
});
