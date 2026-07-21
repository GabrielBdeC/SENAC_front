// ============================================================
// FILTRO DE CATEGORIA
// ============================================================

// querySelectorAll devolve todos os botões de filtro numa lista.
// forEach percorre cada um e adiciona o listener de clique.
const botoesFiltro = document.querySelectorAll('#filtros button');

botoesFiltro.forEach(function (botao) {
  // addEventListener — guarda a função para quando o clique acontecer.
  // Sem parênteses: filtrar  → guarda a função (certo).
  // Com parênteses: filtrar() → executa agora, botão fica sem nada (errado).
  botao.addEventListener('click', function () {
    // dataset.filtro lê o atributo data-filtro do HTML.
    const filtro = botao.dataset.filtro;

    // querySelectorAll('.prato') devolve todos os cards de uma vez.
    const pratos = document.querySelectorAll('.prato');

    pratos.forEach(function (prato) {
      if (filtro === 'todos') {
        // classList.remove('d-none') — garante que o card apareça.
        prato.classList.remove('d-none');
      } else if (prato.dataset.categoria === filtro) {
        // A categoria bate com o filtro: mostra o card.
        prato.classList.remove('d-none');
      } else {
        // A categoria não bate: esconde o card.
        // classList.add('d-none') — o CSS já sabe o que fazer com d-none.
        prato.classList.add('d-none');
      }
    });
  });
});
