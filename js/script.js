//Script do Menu
const links = document.querySelectorAll(".header-menu a");
function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

//Itens-Orçamneto

const parametros = new URLSearchParams(location.search);

function ativaProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativaProduto);

//Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
  console.log(pergunta);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria

const galeria = document.querySelectorAll(".bicicleta-img img");
const galeriaContainer = document.querySelector(".bicicleta-img");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px) ").matches;
  console.log(media);
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventoGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventoGaleria);

//Animacao
if (window.SimpleAnime) {
  new SimpleAnime();
}
