// =============================================
// EXERCÍCIO 4 — for, forEach e map
// =============================================
// Conceitos: for clássico, for...of,
//            forEach, map
// =============================================


// ── TEORIA RÁPIDA ────────────────────────────

let cardapio = ["Margherita", "Fettuccine", "Polenta", "Salame", "Vinho"];
let precos   = [55, 42, 35, 38, 25];

// ── for clássico
// Controla o índice manualmente: começa em 0, vai até length-1.
for (let i = 0; i < cardapio.length; i++) {
  console.log(i + 1 + ". " + cardapio[i]);
}
// 1. Margherita
// 2. Fettuccine
// ...

// ── for...of
// Mais simples quando não precisa do índice.
for (let prato of cardapio) {
  console.log("Disponível: " + prato);
}

// ── forEach
// Executa uma função para cada item do array.
// Não retorna nada — só faz.
cardapio.forEach(function(prato) {
  console.log("Prato: " + prato);
});

// ── map
// Transforma cada item e DEVOLVE UM ARRAY NOVO.
// O original não muda.
let cardapioMaiusculo = cardapio.map(function(prato) {
  return prato.toUpperCase();
});

console.log(cardapioMaiusculo);
// ["MARGHERITA", "FETTUCCINE", "POLENTA", "SALAME", "VINHO"]
console.log(cardapio); // original intacto

// Diferença principal:
//   forEach → percorre e executa. Não retorna array.
//   map     → percorre, transforma e retorna array novo.


// ── EXERCÍCIOS ───────────────────────────────

// 1. Crie um array chamado reservas com 5 nomes de clientes.
//    Use um for clássico para exibir cada um com seu número:
//    "Reserva 1: Maria"
//    "Reserva 2: Carlos"
//    ...

// Escreva sua resposta aqui:


// 2. Usando o array cardapio e o array precos do exemplo acima,
//    use for clássico para exibir cada prato com seu preço:
//    "Margherita — R$ 55"
//    Dica: use o mesmo índice i para os dois arrays.

// Escreva sua resposta aqui:


// 3. Use forEach no array reservas do exercício 1 para exibir:
//    "Bem-vindo(a), Maria!"

// Escreva sua resposta aqui:


// 4. Use map para criar um novo array chamado cardapioComPreco
//    onde cada item seja: "Margherita — R$ 55"
//    (junte o nome do cardapio com o preço de precos pelo índice)
//    Exiba o array resultado.

// Escreva sua resposta aqui:


// 5. DESAFIO: use map para criar um array chamado totais
//    onde cada item seja o preço com 10% de desconto.
//    Ex: 55 → 49.5
//    Exiba os dois arrays (precos original e totais com desconto).

// Escreva sua resposta aqui:
