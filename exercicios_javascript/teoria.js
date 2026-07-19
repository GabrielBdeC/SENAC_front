// =============================================
// JavaScript · Teoria completa
// Cantina da Nonna
// =============================================
// Como usar: abra o index.html no navegador,
// aperte F12 e veja a aba Console.
// =============================================


// ===========================================
// 1. console.log — onde a resposta aparece
// ===========================================

// Escreve uma mensagem no console do navegador.
// É como você enxerga o que o código está fazendo.
console.log("Cantina da Nonna");
console.log(39 * 2); // 78


// ===========================================
// 2. let e const — guardar valores
// ===========================================

// let: variável. O valor pode mudar depois.
let preco = 39;
let quantidade = 2;

// const: constante. O valor não muda mais.
const ENTREGA = 7;

preco = 42; // permitido com let
// ENTREGA = 10; // ERRO — const não pode mudar


// ===========================================
// 3. Tipos de dados
// ===========================================

let prato = "Fettuccine ao molho branco"; // string  — texto, entre aspas
let pessoas = 4;                           // number  — número, sem aspas
let disponivel = true;                     // boolean — true ou false

console.log(prato);      // Fettuccine ao molho branco
console.log(pessoas);    // 4
console.log(disponivel); // true

// Atenção: aspas mudam o tipo!
console.log("39" + 1); // "391" — concatenação de texto
console.log(39 + 1);   // 40   — soma numérica


// ===========================================
// 4. Array — lista de valores
// ===========================================

// Array guarda vários valores em ordem numa única variável.
// O índice começa em 0.
let cardapio = ["Margherita", "Fettuccine", "Polenta", "Vinho"];

console.log(cardapio);        // lista completa
console.log(cardapio[0]);     // "Margherita" — primeiro item
console.log(cardapio[3]);     // "Vinho"      — quarto item
console.log(cardapio.length); // 4            — quantidade de itens


// ===========================================
// 5. function e return — guardar uma receita
// ===========================================

// Escreve uma vez, usa sempre.
function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}


console.log(calcularTotal(39, 2));  // 78
console.log(calcularTotal(25, 4));  // 100


// ===========================================
// 6. if e else — tomar uma decisão
// ===========================================

// = guarda. === compara. Um sinal a mais muda tudo.
let total = calcularTotal(preco, quantidade);

if (total >= 50) {
  console.log("Entrega grátis!");
} else {
  console.log("Entrega: R$ " + ENTREGA);
}

// else if — mais de duas opções
if (pessoas <= 2) {
  console.log("Mesa pequena.");
} else if (pessoas <= 6) {
  console.log("Mesa média.");
} else {
  console.log("Mesa grande ou salão privativo.");
}


// ===========================================
// 7. for — repetir uma ação
// ===========================================

// for clássico
for (let i = 0; i < cardapio.length; i++) {
  console.log(i + 1 + ". " + cardapio[i]);
}

// forEach — para cada item do array, execute uma função
cardapio.forEach(function (item) {
  console.log("Prato disponível: " + item);
});

// map — transforma cada item e devolve um array novo
let comPrefixo = cardapio.map(function (item) {
  return "🍽 " + item;
});
console.log(comPrefixo);


// ===========================================
// 8. switch — escolher entre muitas opções
// ===========================================

let diaDaSemana = "sexta";

switch (diaDaSemana) {
  case "sexta":
    console.log("Rodízio de massas!");
    break;
  case "sabado":
    console.log("Menu completo.");
    break;
  case "domingo":
    console.log("Almoço especial de família.");
    break;
  default:
    console.log("Cardápio normal.");
}


// ===========================================
// 9. Objetos — agrupar dados relacionados
// ===========================================

// Um objeto guarda várias propriedades de uma mesma coisa.
// Usualmente existe um id para identificar cada objeto de forma única,
// mas não é uma regra — depende do contexto.
let prato1 = {
  id: 1,
  nome: "Margherita",
  preco: 55,
  disponivel: true
};

console.log(prato1.id);         // 1
console.log(prato1.nome);       // "Margherita"
console.log(prato1.preco);      // 55
console.log(prato1.disponivel); // true

// Objetos dentro de objetos — propriedade pode ser outro objeto
let reserva = {
  id: 1,
  cliente: "Maria",
  data: {
    dia: 25,
    mes: 7,
    ano: 2026
  },
  mesa: {
    numero: 4,
    area: "interna"
  }
};

console.log(reserva.cliente);       // "Maria"
console.log(reserva.data.dia);      // 25
console.log(reserva.mesa.area);     // "interna"

// Array de objetos — a forma mais usada no dia a dia
let pratos = [
  { id: 1, nome: "Margherita", preco: 55 },
  { id: 2, nome: "Fettuccine", preco: 42 },
  { id: 3, nome: "Vinho",      preco: 25 }
];

pratos.forEach(function (p) {
  console.log(p.id + ". " + p.nome + " — R$ " + p.preco);
});

// Alternativa: objeto de objetos — chave é o id
// Útil quando você precisa buscar um item diretamente pelo id,
// sem percorrer o array inteiro.
let pratosObj = {
  "1": { nome: "Margherita", preco: 55 },
  "2": { nome: "Fettuccine", preco: 42 },
  "3": { nome: "Vinho",      preco: 25 }
};

console.log(pratosObj["1"]);        // { nome: "Margherita", preco: 55 }
console.log(pratosObj["1"].nome);   // "Margherita"
console.log(pratosObj["2"].preco);  // 42

// Diferença principal:
//   Array de objetos  → percorre com forEach/for. Mantém ordem.
//   Objeto de objetos → acessa direto pela chave. Sem percorrer.


// ===========================================
// 10. while — repetir enquanto uma condição for verdadeira
// ===========================================

// Use quando NÃO SABE quantas vezes vai repetir.
// Use for quando SABE quantas vezes vai repetir.
let tentativas = 0;
let confirmado = false;

while (!confirmado) {
  tentativas = tentativas + 1;
  console.log("Tentativa " + tentativas);
  if (tentativas >= 3) {
    confirmado = true;
  }
}
console.log("Confirmado após " + tentativas + " tentativas.");

// do...while — executa PELO MENOS UMA VEZ antes de verificar
let mesa = 0;
do {
  mesa = mesa + 1;
  console.log("Verificando mesa " + mesa);
} while (mesa < 4);


// ===========================================
// 11. Template literals — texto com variáveis
// ===========================================

// Use crase (`) no lugar de aspas.
// Coloque variáveis ou expressões dentro de ${}.
// Acaba com o + para juntar strings.
let nomeCliente = "Maria";
let mesaCliente = 5;

// Jeito antigo
console.log("Bem-vinda, " + nomeCliente + "! Sua mesa é a " + mesaCliente + ".");

// Com template literal
console.log(`Bem-vinda, ${nomeCliente}! Sua mesa é a ${mesaCliente}.`);

// Expressão dentro de ${}
console.log(`Subtotal: R$ ${55 * 2}`);

// Multilinha
let recibo = `
  Cantina da Nonna
  Cliente: ${nomeCliente}
  Mesa: ${mesaCliente}
`;
console.log(recibo);

// Com objetos
pratos.forEach(function (p) {
  console.log(`${p.id}. ${p.nome} — R$ ${p.preco}`);
});
