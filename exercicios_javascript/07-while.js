// =============================================
// EXERCÍCIO 7 — while e do...while
// =============================================
// Conceitos: while, do...while,
//            diferença em relação ao for
// =============================================


// ── TEORIA RÁPIDA ────────────────────────────

// while → "enquanto a condição for verdadeira, repita"
// Use quando NÃO SABE quantas vezes vai repetir.
// Use for quando SABE quantas vezes vai repetir.

// Exemplo: continua tentando confirmar reserva até conseguir
let tentativas = 0;
let confirmado = false;

while (!confirmado) {
  tentativas = tentativas + 1;
  console.log("Tentativa " + tentativas);

  if (tentativas >= 3) {
    confirmado = true; // para o loop
  }
}

console.log("Reserva confirmada após " + tentativas + " tentativas.");

// CUIDADO: se a condição nunca virar false, o loop nunca para.
// Isso trava o navegador. Sempre garanta uma saída.

// ── do...while
// Igual ao while, mas executa o bloco PELO MENOS UMA VEZ
// antes de verificar a condição.

let mesa = 0;

do {
  mesa = mesa + 1;
  console.log("Verificando mesa " + mesa);
} while (mesa < 4);

// Saída:
// Verificando mesa 1
// Verificando mesa 2
// Verificando mesa 3
// Verificando mesa 4

// Diferença:
//   while     → verifica ANTES de executar (pode não executar nenhuma vez)
//   do...while → executa PRIMEIRO, verifica depois (executa ao menos uma vez)


// ── EXERCÍCIOS ───────────────────────────────

// 1. Use while para contar quantos pedidos cabem no carrinho
//    antes de ultrapassar R$ 150.
//    Cada pedido custa R$ 42. Exiba o total a cada rodada.
//    No fim, exiba: "X pedidos — Total: R$ Y"

// Escreva sua resposta aqui:


// 2. Use while para percorrer o array abaixo e parar
//    assim que encontrar "Polenta". Exiba os pratos verificados
//    e, ao final, "Encontrado: Polenta" ou "Não encontrado".

let pratos = ["Margherita", "Fettuccine", "Polenta", "Vinho"];

// Escreva sua resposta aqui:


// 3. Use do...while para exibir uma mensagem de boas-vindas
//    para cada mesa de 1 a 5:
//    "Boa noite! Mesa 1, sua reserva está pronta."

// Escreva sua resposta aqui:


// 4. DESAFIO: simule uma fila de espera.
//    Crie um array com 5 nomes de clientes.
//    Use while para "chamar" cada cliente enquanto a fila não estiver vazia.
//    A cada chamada, remova o primeiro da fila com .shift() e exiba:
//    "Chamando Maria... Fila restante: 4 pessoas."
//    Dica: array.shift() remove e retorna o primeiro item.
//          array.length dá o tamanho atual.

// Escreva sua resposta aqui:
