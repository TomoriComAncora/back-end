const x = "20";

if (!Number.isInteger(x)) {
  throw new Error("O valor não é um inteiro");
}

console.log("O valor é inteiro");
