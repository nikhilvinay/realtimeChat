var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
	//Use this link to  get chat window code
	//http://nicesnippets.com/live/bootstrap-chat-box-code-example-demo.html
  	res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
   