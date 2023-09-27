// import inquirer from "inquirer";
const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "Nome",
      message: "Digite seu nome:",
    },
    {
      name: "Idade",
      message: "Digite sua idade:",
    },
  ])
  .then((resposta) => {
    if (!resposta.Nome || !resposta.Idade) {
      throw new Error("Nome e Idade são campos obrigatórios!");
    }
    console.log(resposta);
    console.log(`O usuário ${chalk.bgYellow.black(resposta.Nome)} tem ${chalk.bgYellow.black(resposta.Idade)} anos de idade.`);
  }).catch((err) => console.log(err));
