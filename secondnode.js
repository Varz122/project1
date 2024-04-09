

const http = require('http')
const server = http.createServer((req,res)=>{
    console.log(req.url,req.header,req.method)
    if(req.url==='/home') {
    
        res.setHeader('Content-Type', 'text/html') 
        res.write('<html>');
        res.write('<head><title>My first node js </title></head>');
        res.write('<body><h3> welcome home </h3></body>')
        res.write('</html>'); 
        res.end();
    
    }
    else if(req.url==='/about'){
        res.setHeader('Content-Type', 'text/html') 
        res.write('<html>');
        res.write('<head><title>My first node js </title></head>');
        res.write('<body><h3> welcome to about us  </h3></body>')
        res.write('</html>'); 
        res.end();
    }
    else (req.url==='/node') {
    
            res.setHeader('Content-Type', 'text/html') 
            res.write('<html>');
            res.write('<head><title>My first node js </title></head>');
            res.write('<body><h3> My fitst node js server </h3></body>')
            res.write('</html>'); 
            res.end();
        
        }
    });




server.listen(5000);



