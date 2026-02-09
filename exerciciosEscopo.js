//exercicio 1

if (true) {
  let desconto = 10;
}
console.log(desconto);

// Não vai dar certo porque o if é um escopo e a variável "desconto" foi definida dentro do escopo, logo, não se aplica fora dele.

//exercício 2

let unidade = "São Paulo";

function alterarUnidade() {
  let unidade = "SBC";
  console.log("Dentro da função:", unidade);
}

alterarUnidade();

console.log("Fora da função:", unidade);

//exercício 3

function verificarClima(temp) {
  let mensagem;

  if (temp > 30) {
    mensagem = "Alerta: Temperatura Alta!";
  } else {
    mensagem = "Temperatura Normal.";
  }
  console.log(mensagem); // Erro aqui!
}
verificarClima(12);

//Não funcionou porque a variável mensagem foi criada dentro do if/else com let e não existe fora desses blocos.
// Quando o console.log(mensagem) é executado, a variável não está no escopo, causando erro.

// exercício 4

for (let i = 0; i < 5; i++) {
    // processando...
}
console.log("O valor final de i é: " + i);

// Apenas mudando var para let

// exercicio 5

console.log(setor);
var setor = "Manutenção";

console.log(maquina);
let maquina = "Torno CNC";

// Hoisting é o comportamento do JavaScript que move declarações para o topo do código. Com var, a variável pode ser acessada antes da atribuição e retorna undefined, o que pode causar bugs. Com let, acessar antes da declaração gera erro, tornando o código mais seguro. Por isso, prefira let ou const.