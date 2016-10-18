const http = require('http');

const httpServer = http.createServer(function(req, res) {

    if(req.url === '/homework3') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('YES,you are right it');
    } 
	  else if(req.url === '/how are you'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Ohhhhh normal,thanks");
    }
      else if(req.url === '/Tatevik'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("It me :) ");
	}	
	  else if(req.url === '/date'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("18.10.2016");	
	 }  
	   
	   else if(req.url === '/cartoon'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Madagascar");
	}
	  else if(req.url === '/song'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Four Seasons ~ Vivaldi");
	}	
	  else if(req.url === '/stop'){
		res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Goodbye!");
	
	}
	
	
	
	
	});

httpServer.listen(3003);