// nome

console.log(process.argv);

const arg = process.argv[2];
const args = process.argv.slice(2);

console.log(arg);
console.log(args);

const nome = args[0].split("=")[1];
// const nome = nome0[1];
console.log(nome);

const idade = args[1].split("=")[1];
console.log(idade);
