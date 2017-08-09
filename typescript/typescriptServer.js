var http = require('http');
var hostname = 'L10B775.NA.SAS.COM';
var port = 8080;
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Thanks for the amazon gift!\n');
});
server.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
