// =============================================
// EXERCÍCIO 8 — Template literals (crases)
// =============================================
// Conceitos: template literal, interpolação,
//            strings multilinha
// =============================================


// ── TEORIA RÁPIDA ────────────────────────────

// Template literal usa crase (`) no lugar de aspas.
// Permite colocar variáveis DENTRO do texto com ${}.
// Acaba com o + para juntar strings.

let nome = "Maria";
let mesa = 5;
let total = 110;

// Jeito antigo — concatenação com +
console.log("Bem-vinda, " + nome + "! Sua mesa é a " + mesa + ".");

// Jeito novo — template literal com ${}
console.log(`Bem-vinda, ${nome}! Sua mesa é a ${mesa}.`);

// Funciona com qualquer expressão dentro de ${}
let preco = 55;
let quantidade = 2;

console.log(`Subtotal: R$ ${preco * quantidade}`);        // R$ 110
console.log(`Desconto: R$ ${(preco * quantidade) * 0.1}`); // R$ 11

// Multilinha — sem precisar de \n
let recibo = `
  Cantina da Nonna
  ─────────────────
  Cliente: ${nome}
  Mesa: ${mesa}
  Total: R$ ${total}
`;

console.log(recibo);

// Com objetos
let prato = { nome: "Margherita", preco: 55 };
console.log(`${prato.nome} — R$ ${prato.preco}`);

// Com array e forEach
let pedidos = [
  { nome: "Margherita", preco: 55 },
  { nome: "Vinho",      preco: 25 }
];

pedidos.forEach(function(p) {
  console.log(`• ${p.nome}: R$ ${p.preco}`);
});


// ── EXERCÍCIOS ───────────────────────────────

// 1. Reescreva as linhas abaixo usando template literal:
//    "Olá, " + nomeCliente + "! Sua reserva para " + pessoas + " pessoas foi confirmada."
//    Crie as variáveis necessárias.

// Escreva sua resposta aqui:


// 2. Crie um array de objetos com 3 pratos (nome e preco).
//    Use forEach e template literal para exibir:
//    "1. Margherita ........... R$ 55,00"

// Escreva sua resposta aqui:


// 3. Crie uma função chamada gerarRecibo que recebe
//    nomeCliente, mesa e total.
//    Ela deve retornar um texto multilinha (template literal) com
//    o recibo formatado. Chame e exiba no console.

// Escreva sua resposta aqui:


// 4. DESAFIO: use template literal dentro de um map para transformar
//    o array abaixo em um array de strings formatadas:
//    ["Margherita — R$ 55", "Fettuccine — R$ 42", "Vinho — R$ 25"]

let cardapio = [
  { nome: "Margherita", preco: 55 },
  { nome: "Fettuccine", preco: 42 },
  { nome: "Vinho",      preco: 25 }
];

// Escreva sua resposta aqui:
