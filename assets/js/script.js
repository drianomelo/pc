const btnModal = document.querySelector(".main__btn");
const iconBtnModal = document.querySelector(".icon");
const modal = document.querySelector(".modal");

btnModal.addEventListener("click", () => {
  if (modal.style.opacity == "0") {
    modal.style.opacity = "1";
    modal.style.top = "15%";
    btnModal.style.backgroundColor = "#ed6077";
    iconBtnModal.style.transform = "rotate(45deg)";
    modal.style.pointerEvents = "all";
  } else {
    modal.style.opacity = "0";
    modal.style.top = "12%";
    btnModal.style.backgroundColor = "#60ed77";
    iconBtnModal.style.transform = "rotate(0)";
  }
});

//FUNÇAO PARA MASCARA DE PREÇO

function formatarPreco(input) {
  // Limpa o valor digitado
  var valor = input.value.replace(/\D/g, "");

  // Formata o valor de acordo com o padrão brasileiro
  valor = (valor / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2 });

  // Atualiza o valor no input
  input.value = valor;
}

// MODALS DE INPUT

const modalPeca = document.querySelector(".modal-pecas");
const modalPeriferico = document.querySelector(".modal-perifericos");
const btnPeca = document.querySelector("#pecas");
const btnPerifericos = document.querySelector("#perifericos");
const btnAddPecas = document.querySelector(".btn-pecas");
const btnAddPerifericos = document.querySelector(".btn-perifericos");
const body = document.querySelector(".flex");

btnPeca.addEventListener("click", () => {
  modalPeca.style.display = "block";
  body.style.filter = "brightness(0.4)";
  modal.style.pointerEvents = "none";
  modal.style.filter = "brightness(0.4)";
});

btnPerifericos.addEventListener("click", () => {
  modalPeriferico.style.display = "block";
  body.style.filter = "brightness(0.4)";
  modal.style.pointerEvents = "none";
  modal.style.filter = "brightness(0.4)";
});

btnAddPecas.addEventListener("click", () => {
  modalPeriferico.style.display = "none";
  modalPeca.style.display = "none";
  body.style.filter = "brightness(1)";
  modal.style.filter = "brightness(1)";
  modal.style.pointerEvents = "all";
});

btnAddPerifericos.addEventListener("click", () => {
  modalPeriferico.style.display = "none";
  modalPeca.style.display = "none";
  body.style.filter = "brightness(1)";
  modal.style.filter = "brightness(1)";
  modal.style.pointerEvents = "all";
});

body.addEventListener("click", () => {
  modalPeriferico.style.display = "none";
  modalPeca.style.display = "none";
  body.style.filter = "brightness(1)";
  modal.style.filter = "brightness(1)";
  modal.style.pointerEvents = "all";
});

const formPecas = document.querySelector("#form-pecas");
const itensPecas = JSON.parse(localStorage.getItem("list__item-pecas")) || [];
const listaPecas = document.querySelector(".list__lista-pecas");

itensPecas.forEach((elemento) => {
  criaElementoPecas(elemento);
});

formPecas.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = evento.target.elements["nome"];

  const itemAtual = {
    nome: nome.value,
  };

  criaElementoPecas(itemAtual);

  itensPecas.push(itemAtual);

  localStorage.setItem("list__item-pecas", JSON.stringify(itensPecas));

  nome.value = "";
});

function criaElementoPecas(item) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("list__item");
  novoItem.innerHTML += item.nome;

  const btnFecharItem = document.createElement("button");
  btnFecharItem.classList.add("list__btn");
  const iconFechar = document.createElement("i");
  iconFechar.classList.add("fa-solid");
  iconFechar.classList.add("fa-xmark");

  btnFecharItem.appendChild(iconFechar);

  novoItem.appendChild(btnFecharItem);

  listaPecas.appendChild(novoItem);
}

const formPerifericos = document.querySelector("#form-perifericos");
const itensPerifericos =
  JSON.parse(localStorage.getItem("list__item-perifericos")) || [];
const listaPerifericos = document.querySelector(".list__lista-perifericos");

itensPerifericos.forEach((elemento) => {
  criaElementoPerifericos(elemento);
});

formPerifericos.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = evento.target.elements["nome"];

  const itemAtual = {
    nome: nome.value,
  };

  criaElementoPerifericos(itemAtual);

  itensPerifericos.push(itemAtual);

  localStorage.setItem("list__item-perifericos", JSON.stringify(itensPerifericos));

  nome.value = "";
});

function criaElementoPerifericos(item) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("list__item");
  novoItem.innerHTML += item.nome;

  const btnFecharItem = document.createElement("button");
  btnFecharItem.classList.add("list__btn");
  const iconFechar = document.createElement("i");
  iconFechar.classList.add("fa-solid");
  iconFechar.classList.add("fa-xmark");

  btnFecharItem.appendChild(iconFechar);

  novoItem.appendChild(btnFecharItem);

  listaPerifericos.appendChild(novoItem);
}
