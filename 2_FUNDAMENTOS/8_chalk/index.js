const chalk = require("chalk");

const nota = 5;

if (nota < 6) {
  console.log(chalk.bgRed("Estude mais"));
} else {
  console.log(chalk.green.bold(("Parabéns! Aprovado")));
}
