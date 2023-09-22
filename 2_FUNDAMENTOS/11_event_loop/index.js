function a() {
  console.log("Executando a()");
}

function b() {
  console.log("Executando b()");
}

function c() {
  b();
  a();
  console.log("Executando c()");
}

c();
