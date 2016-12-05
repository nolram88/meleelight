/* globals app */
var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;

// app.get('/', function(req, res, next) { res.send('Hello world!'); });
//
// var server = app.listen(9000);
//
var options = {
  debug: true
};
//
//  app.use('/api', ExpressPeerServer(server, options));

// OR

var server = require('http').createServer(app);

app.use('/p2p', ExpressPeerServer(server, options));

server.listen(9000);



server.on('connection', function (id) {

  var _emit = id.emit;
  _onevent = id.onevent;

  id.emit = function () { //Override outgoing
                              //Do your logic here
// for(var i =arguments.length;i >0;i--){
//   console.log(BinaryPack.unpack(arguments[i]));
// }
    console.log('***', 'emit', arguments[1]);
    _emit.apply(id, arguments);

  };

  id.onevent = function (packet) { //Override incoming
    var args = packet.data || [];
    //Do your logic here
    // if(packet.length)
    //   for(var i =packet.length;i >0;i--){
    //     console.log(BinaryPack.unpack(packet[i]));
    //   }
    console.log('***', 'onevent', packet);
    _onevent.call(id, packet);
  };

});

server.on('disconnect', function (id) {
  var _emit = id.emit;
  _onevent = id.onevent;

  id.emit = function () { //Override outgoing
    //Do your logic here
    // for(var i =arguments.length;i >0;i--){
    //   console.log(BinaryPack.unpack(arguments[i]));
    // }
    console.log('***', 'emit', arguments);
    _emit.apply(id, arguments);
  };

  id.onevent = function (packet) { //Override incoming
    var args = packet.data || [];
    //Do your logic here
    // if(packet.length)
    //   for(var i =packet.length;i >0;i--){
    //     console.log(BinaryPack.unpack(packet[i]));
    //   }
    console.log('***', 'onevent', packet);
    _onevent.call(id, packet);
  };
});