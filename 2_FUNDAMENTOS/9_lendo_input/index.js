const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual seu número preferido? ", (numero) => {
  console.log(`O seu número preferido é ${numero}`);
  readline.close();
});
