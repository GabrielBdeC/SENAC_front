// =============================================
// EXERCÍCIO 2 — Funções e argumentos
// =============================================
// Conceitos: function, parâmetros, return,
//            funções sem return
// =============================================


// ── TEORIA RÁPIDA ────────────────────────────

// Uma função é uma receita: escreve uma vez, usa sempre.
// Parâmetros são os ingredientes que ela precisa.
// return é o resultado que ela devolve para quem chamou.

function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}

console.log(calcularTotal(55, 2));  // 110
console.log(calcularTotal(25, 4));  // 100

// Função com mais de um passo
function calcularComEntrega(preco, quantidade) {
  let subtotal = preco * quantidade;
  let entrega = 7;

  if (subtotal >= 50) {
    entrega = 0;
  }

  return subtotal + entrega;
}

console.log(calcularComEntrega(39, 2)); // 78 + 0  = 78  (grátis)
console.log(calcularComEntrega(25, 1)); // 25 + 7  = 32

// Função sem return — só executa uma ação
function saudar(nome) {
  console.log("Bem-vindo(a), " + nome + "!");
}

saudar("Maria");   // Bem-vindo(a), Maria!
saudar("Carlos");  // Bem-vindo(a), Carlos!


// ── EXERCÍCIOS ───────────────────────────────

// 1. Crie uma função chamada apresentarPrato que recebe o nome e o preço
//    e exibe: "Prato: Margherita — R$ 55"
//    Chame ela com pelo menos 2 pratos diferentes.

// Escreva sua resposta aqui:


// 2. Crie uma função chamada calcularDesconto que recebe preco e percentual,
//    e retorna o preço com o desconto aplicado.
//    Ex: calcularDesconto(100, 10) → 90
//    Exiba o resultado com console.log.

// Escreva sua resposta aqui:


// 3. Crie uma função chamada verificarMesa que recebe o número de pessoas.
//    Ela deve retornar: "Mesa para 2", "Mesa para 4" ou "Mesa grande"
//    conforme a quantidade.

// Escreva sua resposta aqui:


// 4. DESAFIO: crie uma função chamada resumoPedido que recebe
//    nomePrato, preco e quantidade.
//    Ela deve exibir no console:
//      "Pedido: 2x Margherita = R$ 110"
//    Use calcularTotal de dentro dela (pode copiar a função lá de cima).

// Escreva sua resposta aqui:
