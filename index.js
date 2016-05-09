var server = require("./server.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers");

//Para el ruteo
var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);