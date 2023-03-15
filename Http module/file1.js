var http = require('http')
var url=require('url')
var server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World");
    res.write("<br>"+req.url);
    if(req.url==="/summer"){
        res.write("<br>This is Summer");
    }
    else if(req.url==="/winter"){
        res.write("<br>This is Winter");
    }
    res.end()
})
server.listen(3000)
