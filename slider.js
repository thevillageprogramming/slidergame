const util = require("util");
const cheerio = require("cheerio");
const http = require("http");
const fs = require("fs");
const app = require('http').createServer(handler);
const io = require("socket.io")(app);

//const { createCanvas, loadImage } = require('canvas');
//const canvas = createCanvas(16, 16);
//const ctx = canvas.getContext('2d');

var characterstate = [0,1,2,3,4];
var currentstate = 0;

//state 0 = nothing
//state 1 = ground level
//state 2 = slowed
//state 3 = jump
//state 4 = speed up

var currentspeed = 1;
//speed 0 = stopped speed 1 = normal speed speed 2 = speedbuff

console.log(util.inspect(characterstate,false,null));

app.listen(8000);

function handler(req, res){
	fs.readFile(__dirname +"/website.html",
	function (err, data) {
		if (err) {
			res.writeHead(500);
			return res.end('Error loading index.html');
		}

		res.writeHead(200);
		res.end(data);
	});
}

io.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
});

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(website);
	response.end();
}).listen(8000);

function vector2D (x_, y_) { //vectors
	this.x = x_;
	this.y = y_;
}

function player (){ //constructor function
	this.position = vector2D (16*2, 0);
	this.velocity = vector2D (0, 0);
	this.acceleration = vector2D (0, -1);
	this.state = 0;
	this.update = function() {

	}
	this.applyState = function () {
		
	}
}