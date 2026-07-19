// =============================================
// EXERCÍCIO 5 — switch
// =============================================
// Conceitos: switch, case, break, default
// =============================================


// ── TEORIA RÁPIDA ────────────────────────────

// switch é como um if com muitas opções iguais a ===
// Usar quando a mesma variável pode ter vários valores exatos.
// break encerra o switch. Sem ele, os cases seguintes também rodam.
// default é o "senão" — roda quando nenhum case bateu.

let diaDaSemana = "sexta";

switch (diaDaSemana) {
  case "segunda":
  case "terca":
    console.log("Fechado — descansando a cozinha.");
    break;
  case "quarta":
  case "quinta":
    console.log("Aberto. Cardápio normal.");
    break;
  case "sexta":
    console.log("Aberto. Rodízio de massas!");
    break;
  case "sabado":
    console.log("Aberto. Menu completo.");
    break;
  case "domingo":
    console.log("Aberto. Almoço especial de família.");
    break;
  default:
    console.log("Dia inválido.");
}

// Dois cases no mesmo bloco (segunda e terca acima)
// significa: SE for segunda OU terca, executa o mesmo código.

// switch com number
let avaliacao = 5;

switch (avaliacao) {
  case 5:
    console.log("Excelente!");
    break;
  case 4:
    console.log("Muito bom!");
    break;
  case 3:
    console.log("Regular.");
    break;
  default:
    console.log("Precisamos melhorar.");
}


// ── EXERCÍCIOS ───────────────────────────────

// 1. Crie uma variável tipoPagamento com o valor "pix".
//    Use switch para exibir:
//      "pix"       → "Pagamento instantâneo. Sem taxa."
//      "credito"   → "Parcelamos em até 3x sem juros."
//      "debito"    → "Desconto de 5% no débito."
//      "dinheiro"  → "Troco disponível."
//      default     → "Forma de pagamento não aceita."
//    Teste com outros valores.

// Escreva sua resposta aqui:


// 2. Crie uma variável tamanhoMesa com valores possíveis:
//    "P", "M" ou "G".
//    Use switch para exibir a capacidade:
//      "P" → "Até 2 pessoas."
//      "M" → "Até 6 pessoas."
//      "G" → "Até 12 pessoas."
//      default → "Tamanho desconhecido."

// Escreva sua resposta aqui:


// 3. DESAFIO: crie uma variável mes (número de 1 a 12).
//    Use switch para exibir o nome do mês em português.
//    Agrupe os meses de verão (dezembro, janeiro, fevereiro)
//    em um único bloco que exiba "Mês de verão — Reservas lotam rápido!".

// Escreva sua resposta aqui:
