const fs = require("fs");

console.log("Iníco");

fs.writeFile("arquivo2.txt", "mais um teste", (err) => {
  setTimeout(() => {
    console.log("Arquivo criado");
  }, 2000);
});

console.log("Fim");
