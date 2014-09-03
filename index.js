var ab = require('atob'),
    ba = require('btoa'),
    crypto = require('crypto'),

    express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    request = require('request'),
    path = require('path'),

    port = 3333;

crypto.pbkdf2('password', 'asdfasdf', 2, 10, function(err,key){console.log(key)})

// Serves HTML
app.get('/', function(req,res){
 res.sendFile(path.join(__dirname, '/views', 'index.html'));
});

// Access to local filesysytem for views
app.use('/styles', express.static(path.join(__dirname, '/views/styles')));

// i/o
io.on('connection', function(socket){
  var data = 'data'
  io.emit('data',data) 
  console.log(data)
 });

// Starts server
http.listen(port, function(){
    console.log('ON/'+port);
});
