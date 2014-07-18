var SerialPort = require('serialport').SerialPort,
    util       = require('util'),
    _          = require('underscore'),
    events     = require('events'),
    serialPort = new SerialPort('/dev/cu.SLAB_USBtoUART', {
      baudrate: 9600
    });

//APC220
var APC220 = function () {
  this.def = {
    port: '/dev/cu.SLAB_USBtoUART',
    baudrate: 9600
  };
};

//APC220 connect
APC220.prototype.connect = function (options) {
  _.extend(this.def, options);

  //Create new serialport connection
  var serialPort = new SerialPort(this.def.port, {
    baudrate: this.def.baudrate
  });

  util.inherits(this, serialPort)

  return this;
};

var apc220 = new APC220();

apc220.connect();

apc220.on('open', function () {
});
