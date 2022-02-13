const http = require("http");

const requestListener = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url == "/test") {
    res.writeHead(200);
    res.end("Esto es una prueba");
  } else if (req.url == "/otro-test") {
    res.writeHead(200);
    res.end("Esto es otra prueba");
  } else {
    res.writeHead(404);
    res.end("Ruta no encontrada");
  }
};

const server = http.createServer(requestListener);
const port = 3000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server is up and running in ${host}:${port}`);
});