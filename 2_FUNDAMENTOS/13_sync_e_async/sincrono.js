const fs = require("fs");

console.log("Inicio");

fs.writeFileSync("arquivo.txt", "teste");

console.log("Fim");
