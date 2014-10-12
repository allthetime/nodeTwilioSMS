var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    request = require('request'),
    path = require('path'),
    port = 3333,
    msg = require('./msg');

//Serves HTML
//app.get('/nodesms', function(req,res){
// res.sendFile(path.join(__dirname, '/views', 'index.html'));
//});

app.get('/', function(req,res){
 res.sendFile(path.join(__dirname, '/views', 'index.html'));
});


// Access to local filesysytem for views
app.use('/styles', express.static(path.join(__dirname, '/views/styles')));
// i/o


io.on('connection', function(socket){

        msg.update(function(data){
            io.emit('load_msgs',data)
        });

  socket.on('msg', function(data){
    msg.send(data);
    console.log("<<<<<<<<"+data+">>>>>>>>");

    setTimeout(function(){
        msg.update(function(data){
            io.emit('load_msgs',data)
        });    
    },1000);

  });


});
// Starts server
http.listen(port, function(){
    console.log('ON/'+port);
});

var url = "https://graph.facebook.com/?ids=303188229719999";


//var timer = setInterval(function(){
//  request({ url: url, json: true }, function (error, response, body) {
//    if (!error && response.statusCode === 200) {
//        console.log(body['303188229719999'].likes);
//
//    
 //            io.emit('likes',body['303188229719999'].likes)
 //   
//
 //       if(body['303188229719999'].likes == 249){
 //         msg.send("GO GO GO GO GO")
 //         clearInterval(timer)
//        }
//    };
//  });
// },10000);




app.post('/respondToSMS', function(req, res) {
    //Validate that this request really came from Twilio...


        // console.log("Meow!", req.res.connection.parser.onBody)
        // console.log("Woof!", req)


        msg.update(function(data){
            io.emit('load_msgs',data)
        });

});
















