const util = require("util");
const cheerio = require("cheerio");
const http = require("http");
const fs = require("fs");
var website = "";

fs.readFile("./website.html", "utf8", function(err, websitedata){
	if(err){
		console.log("Websitefile not found");
	}
	website = websitedata;
	//console.log(websitedata);

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