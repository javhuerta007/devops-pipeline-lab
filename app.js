const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola desde un pipeline DevOps REAL\n');
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
