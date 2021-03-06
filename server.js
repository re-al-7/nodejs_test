var http = require("http");
var url = require("url");

function iniciar(route, handle)
{
    function onRequest(request, response) 
    {
        var pathname = url.parse(request.url).pathname;
        console.log("Peticion recibida para " + pathname);
        
        var content = route(handle, pathname);
        
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Servidor iniciado...");
}

exports.iniciar = iniciar;