import inquirer from "inquirer";

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual a primeira nota?",
    },
    {
      name: "p2",
      message: "Qual a segunda nota?",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const soma = parseFloat(answers.p1) + parseFloat(answers.p2);
    console.log(soma);
  })
  .catch((err) => console.log(err));
