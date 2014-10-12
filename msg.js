var auth = require('./auth');


var client = require('twilio')(auth.public,auth.private);

exports.send = function send_message(msg){
    client.sendMessage({
    to:'+12505080533', // the number for the phone in your pocket
    from:'+17784021114', // your Twilio number
    body: msg // The body of the text message
    }, function(error, message) {
      if (error) {
          console.error('Dagnabit.  We couldn\'t send the message');
      } else {
          console.log('Message sent! Message id: '+message.sid);
      }
    });
}

exports.update = function update_messages(callback){
  client.messages.list(function(err, data) {
      callback(data.messages)    
      });
  };  


