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
	let x = x_;
	let y = y_;
}

function player (){ //constructor function
	let position = vector2D ()
}