var express = require('express.io');
var app = express();
app.http().io();
var PORT = 3000;
console.log('server started on port ' + PORT);

app.use(express.static('./dist'));

app.get('/', function(req, res) {
  res.redirect('/meleelightikd.html');
});

app.listen(3000, function() {
  console.log('Melee Light running on port 3000');
});
app.io.route('ready', function(req) {
  req.io.join(req.data.signal_room);
});

app.io.route('signal', function(req) {
  //Note the use of req here for broadcasting so only the sender doesn't receive their own messages
  req.io.room(req.data.room).broadcast('signaling_message', {
    type: req.data.type,
    message: req.data.message
  });
});