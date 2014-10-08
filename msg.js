var client = require('twilio')('ACd635c78e9505a2e39ecaff041997f1c8', 'a7dcb2dffcc28fcf524e73e7f7e08aeb')

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


