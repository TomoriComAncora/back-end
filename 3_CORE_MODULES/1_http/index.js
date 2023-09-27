const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.write("Oi Server!");
  res.end();
});

server.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}.`);
});
