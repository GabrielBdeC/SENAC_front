// Array de objetos: cada objeto é um prato do cardápio
const cardapio = [
  {
    nome: "Fettuccine ao molho branco",
    descricao: "Massa fresca ao molho de creme de leite com parmesão ralado na hora e toque de noz-moscada.",
    preco: 42,
    categoria: "massa",
    img: "public/images/massa.jpg"
  },
  {
    nome: "Pizza margherita",
    descricao: "Pizza no forno a lenha com molho de tomate artesanal, mussarela fresca e folhas de manjericão.",
    preco: 55,
    categoria: "pizza",
    img: "public/images/pizza.avif"
  },
  {
    nome: "Polenta com fortaia",
    descricao: "Polenta cremosa servida com fortaia — omelete de ovos caipiras — prato típico da cozinha ítalo-gauchesca.",
    preco: 35,
    categoria: "entrada",
    img: "public/images/polenta.jpg"
  },
  {
    nome: "Salame e queijo colonial",
    descricao: "Salame artesanal fatiado acompanhado de queijo colonial da região, servido com pão caseiro.",
    preco: 38,
    categoria: "entrada",
    img: "public/images/salame.jpeg"
  },
  {
    nome: "Vinho Goethe (taça)",
    descricao: "Vinho branco da uva Goethe, cultivada em Urussanga/SC. Aroma floral, sabor suave e levemente ácido.",
    preco: 25,
    categoria: "bebida",
    img: "public/images/vinho.webp"
  }
];

// Recebe um prato e devolve o HTML do card
function cardDoPrato(p) {
  return `
    <div class="col-md-6 mb-4 prato" data-categoria="${p.categoria}">
      <div class="border rounded p-3 h-100 d-flex flex-column">
        <div class="d-flex justify-content-between align-items-start gap-3">
          <div>
            <h5>${p.nome}</h5>
            <p class="text-muted small">${p.descricao}</p>
          </div>
          <img src="${p.img}" alt="${p.nome}" class="cardapio-img rounded">
        </div>
        <p class="mt-auto mb-0 pt-3">R$ ${p.preco},00</p>
      </div>
    </div>`;
}

// Percorre o array e monta todos os cards de uma vez no HTML
const lista = document.querySelector('#lista-pratos');
let html = '';

cardapio.forEach(function (prato) {
  html += cardDoPrato(prato);
});

lista.innerHTML = html;

// Filtro: mostra/esconde cards pelo data-categoria de cada card
const botoesFiltro = document.querySelectorAll('#filtros button');

botoesFiltro.forEach(function (botao) {
  botao.addEventListener('click', function () {
    const filtro = botao.dataset.filtro;  // lê o data-filtro do botão clicado
    const pratos = document.querySelectorAll('.prato');

    pratos.forEach(function (prato) {
      prato.classList.remove('d-none');
      if (filtro !== 'todos' && prato.dataset.categoria !== filtro) {
        prato.classList.add('d-none');
      }
    });
  });
});
