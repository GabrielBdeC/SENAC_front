// =============================================
// EXERCÍCIO 3 — if, else if, else
// =============================================
// Conceitos: if, else, else if,
//            operadores de comparação
// =============================================


// ── TEORIA RÁPIDA ────────────────────────────

// Operadores de comparação:
//   >   maior que
//   <   menor que
//   >=  maior ou igual
//   <=  menor ou igual
//   === igual (compara — não guarda!)
//   !== diferente
//
// ATENÇÃO: = guarda um valor. === pergunta se são iguais.
//   preco = 50   → muda o preço para 50
//   preco === 50 → pergunta: o preço é 50?

let total = 78;

// if simples
if (total >= 50) {
  console.log("Entrega grátis!");
}

// if + else
if (total >= 50) {
  console.log("Entrega grátis!");
} else {
  console.log("Entrega: R$ 7");
}

// if + else if + else — mais de duas opções
let pessoas = 7;

if (pessoas <= 2) {
  console.log("Mesa pequena.");
} else if (pessoas <= 6) {
  console.log("Mesa média.");
} else {
  console.log("Mesa grande ou salão privativo.");
}

// Condição com boolean
let estaAberto = true;

if (estaAberto) {
  console.log("Restaurante aberto. Faça sua reserva!");
} else {
  console.log("Restaurante fechado no momento.");
}


// ── EXERCÍCIOS ───────────────────────────────

// 1. Crie uma variável hora com o valor 14.
//    Se hora for menor que 12, exiba "Bom dia!".
//    Se for entre 12 e 18, exiba "Boa tarde!".
//    Senão, exiba "Boa noite!".
//    Teste com outros valores de hora.

// Escreva sua resposta aqui:


// 2. Crie uma variável notaAvaliacao (de 1 a 5).
//    Se for 5, exiba "Excelente!".
//    Se for 4, exiba "Muito bom!".
//    Se for 3, exiba "Regular.".
//    Se for menor que 3, exiba "Precisa melhorar.".

// Escreva sua resposta aqui:


// 3. Crie uma variável totalPedido.
//    Se o total for maior que 200, aplique 15% de desconto e exiba o valor final.
//    Se for maior que 100, aplique 10%.
//    Senão, sem desconto.

// Escreva sua resposta aqui:


// 4. DESAFIO: crie uma variável idade.
//    Se for menor que 18, exiba "Não servimos bebidas alcoólicas.".
//    Senão exiba "Qual bebida deseja?".
//    Depois, dentro do else, verifique se a idade é maior que 60
//    e, se sim, adicione "Desconto de 10% para maiores de 60!".

// Escreva sua resposta aqui:
