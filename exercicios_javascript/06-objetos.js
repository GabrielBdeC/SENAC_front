// =============================================
// EXERCÍCIO 6 — Objetos
// =============================================
// Conceitos: object literal, propriedades,
//            acesso por ponto, array de objetos
// =============================================


// ── TEORIA RÁPIDA ────────────────────────────

// Um objeto agrupa dados relacionados numa única variável.
// É como uma ficha: cada campo tem nome (chave) e valor.

// id: identificador único do item — como um número de registro.
// Cada objeto no array tem um id diferente.
let prato = {
  id: 1,
  nome: "Margherita",
  preco: 55,
  disponivel: true,
  ingredientes: ["molho", "mussarela", "manjericão"]
};

// Acessar propriedades com ponto
console.log(prato.id);            // 1
console.log(prato.nome);          // "Margherita"
console.log(prato.preco);         // 55
console.log(prato.ingredientes);  // ["molho", "mussarela", "manjericão"]
console.log(prato.ingredientes[0]); // "molho"

// Alterar uma propriedade
prato.disponivel = false;
console.log(prato.disponivel); // false

// Array de objetos — a forma mais usada no dia a dia
let cardapio = [
  { id: 1, nome: "Margherita",  preco: 55, disponivel: true  },
  { id: 2, nome: "Fettuccine",  preco: 42, disponivel: true  },
  { id: 3, nome: "Polenta",     preco: 35, disponivel: false },
  { id: 4, nome: "Vinho",       preco: 25, disponivel: true  }
];

// Percorrer com forEach
cardapio.forEach(function(p) {
  if (p.disponivel) {
    console.log(p.nome + " — R$ " + p.preco);
  }
});

// map em array de objetos
let nomes = cardapio.map(function(p) {
  return p.nome;
});
console.log(nomes); // ["Margherita", "Fettuccine", "Polenta", "Vinho"]


// ── EXERCÍCIOS ───────────────────────────────

// 1. Crie um objeto chamado restaurante com as propriedades:
//    nome, cidade, capacidade e aberto (boolean).
//    Exiba cada propriedade separadamente com console.log.

// Escreva sua resposta aqui:


// 2. Crie um array de objetos chamado reservas com 3 reservas.
//    Cada reserva deve ter: nomeCliente, data, pessoas.
//    Use forEach para exibir cada reserva no formato:
//    "Maria — 25/07/2026 — 4 pessoas"

// Escreva sua resposta aqui:


// 3. Use o array cardapio do exemplo acima.
//    Use forEach para exibir apenas os pratos disponíveis.
//    Para os indisponíveis, exiba: "Polenta — indisponível no momento."

// Escreva sua resposta aqui:


// 4. Use map no array cardapio para criar um novo array chamado
//    cardapioComTaxa onde o preço de cada prato tem 10% de taxa
//    de serviço adicionado. Cada item do novo array deve ser um
//    objeto com nome e precoFinal.
//    Exiba o resultado.

// Escreva sua resposta aqui:


// 5. DESAFIO: crie uma função chamada encontrarPrato que recebe
//    o array cardapio e um id (number).
//    Ela deve percorrer o array e retornar o objeto do prato
//    se encontrar, ou null se não encontrar.
//    Exiba o resultado para id 2 e para id 99.

// Escreva sua resposta aqui:
