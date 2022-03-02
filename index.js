const express = require("express");
const server = express();
const kodersRouter = require("./kodersRouter");

// middleware de aplicacion o de servidor
server.use(
  (request, response, next) => {
    console.log("Middleware de aplicacion 1");
    // request.user = {
    //     name: 'Jess'
    // }
    // console.log(request.user)
    next();
  },
  (request, response, next) => {
    console.log("Middleware de aplicacion 2");
    // console.log(request.user)
    next();
  }
);

server.use((request, response, next) => {
  console.log("Middleware de aplicación 3");
  // console.log(request.user)
  next();
});

function middleware(request, response, next) {
  console.log("Middleware externa");
  next();
}

server.use(middleware);

function middlewareRuta(request, response, next) {
  console.log("Middleware de ruta");
  next();
}

// montar el router de koders
server.use("/", kodersRouter);

server.get(
  "/",
  (request, response, next) => {
    console.log("Middleware de ruta GET /");
    next();
  },
  (request, response) => {
    // console.log('Endpoint GET: ',request.user)
    response.json({
      message: "Hola Koders!!",
    });
  }
);

server.post("/", middlewareRuta, (request, response) => {
  // console.log('Endpoint POST: ',request.user)
  response.json({
    message: "Holis a todos!!",
  });
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});

// Middleware son funciones
// (request, response, next) => {}

// Middleware a nivel de aplicación o de servidor
// Middleware a nivel de router
// Middleware a nivel de ruta
