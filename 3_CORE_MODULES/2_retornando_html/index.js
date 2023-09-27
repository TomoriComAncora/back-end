const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Contenty-Type", "text/html");
  res.end("<h1>Primeiro texto no servidor com html</h1>");
});

server.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}.`);
});
