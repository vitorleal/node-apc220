var SerialPort = require('serialport').SerialPort,
    util       = require('util'),
    _          = require('underscore'),
    events     = require('events');

/*
 * APC220 main class
 * */
var APC220 = function (options) {
  this.def = {
    port: '/dev/cu.SLAB_USBtoUART',
    baudrate: 9600
  };

  return this;
};
//Inherits from EventEmitter
util.inherits(APC220, events.EventEmitter);


/*
 * APC220 connect
 * */
APC220.prototype.connect = function (options) {
  _.extend(this.def, options);

  //Create new serialport connection
  var serialPort = new SerialPort(this.def.port, {
    baudrate: this.def.baudrate
  });

  //When serial opne
  serialPort.on('open', function () {
    console.log('We are connected');
  });

  //Error
  serialPort.on('error', function (error) {
    console.log(error);
  });

  _.extend(this, serialPort);

  return this;
};

module.exports = APC220;
