// =============================================
// EXERCÍCIO 1 — Variáveis e tipos de dados
// =============================================
// Conceitos: let, const, number, string,
//            boolean, array
// =============================================


// ── TEORIA RÁPIDA ────────────────────────────

// let   → caixa cujo conteúdo pode mudar
// const → caixa lacrada, valor fixo

let nomePrato = "Margherita"; // string  — texto, entre aspas
let precoPrato = 55;          // number  — número, sem aspas
let estaDisponivel = true;    // boolean — verdadeiro ou falso

const TAXA_SERVICO = 0.1; // 10% — nunca vai mudar

// Array → lista ordenada de valores
let ingredientes = ["molho", "mussarela", "manjericão"];

console.log(nomePrato);           // Margherita
console.log(precoPrato);          // 55
console.log(estaDisponivel);      // true
console.log(ingredientes);        // lista completa
console.log(ingredientes[0]);     // "molho"      — índice começa em 0
console.log(ingredientes.length); // 3            — quantidade de itens

// Atenção ao tipo!
console.log("55" + 10); // "5510" — string + number = concatenação
console.log(55 + 10);   // 65    — number + number = soma


// ── EXERCÍCIOS ───────────────────────────────

// 1. Crie uma variável chamada nomeRestaurante com o valor "Cantina da Nonna".
//    Use console.log para exibir ela.

// Escreva sua resposta aqui:


// 2. Crie variáveis para um prato do cardápio: nome, preço e se está disponível.
//    Escolha o prato que quiser. Exiba as três variáveis no console.

// Escreva sua resposta aqui:


// 3. Crie um array chamado bebidas com pelo menos 4 bebidas do cardápio.
//    Exiba o array inteiro, depois só o primeiro item, depois o último item.
//    Dica: o último índice é array.length - 1

// Escreva sua resposta aqui:


// 4. Crie uma const chamada CAPACIDADE_MAXIMA com o valor 80 (máximo de pessoas).
//    Tente mudar o valor dela logo abaixo. O que acontece no console?

// Escreva sua resposta aqui:


// 5. DESAFIO: crie um array chamado cardapio com 5 pratos (strings).
//    Exiba quantos pratos há no cardápio usando .length.

// Escreva sua resposta aqui:
