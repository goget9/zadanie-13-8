var http = require('http');
var fs = require('fs');
var htmlMsg = ''

var server = http.createServer();
server.on('request', function(request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");
	if (request.method === 'GET' && request.url === '/') {
		fs.readFile('./index.html', 'utf-8', function(err, data) {
			console.log(data)
			htmlMsg = data.toString();
		});
		response.write(htmlMsg);
		response.end();
	} else {
		response.statusCode = 404;
		response.write('<img src="https://fthmb.tqn.com/4qMvIZ33Qlf6S9rdbLA-0JZF6rU=/768x0/filters:no_upscale()/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg">');
		response.end();
	};
});

server.listen(9000);