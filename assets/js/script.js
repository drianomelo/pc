const btnModal = document.querySelector(".main__btn");
const iconBtnModal = document.querySelector(".icon");
const modal = document.querySelector(".modal");

btnModal.addEventListener("click", () => {
  if (modal.style.opacity == "0") {
    modal.style.opacity = "1";
    btnModal.style.backgroundColor = "#ed6077";
    iconBtnModal.style.transform = "rotate(45deg)";
    modal.style.pointerEvents = "all";
  } else {
    modal.style.opacity = "0";
    btnModal.style.backgroundColor = "#60ed77";
    iconBtnModal.style.transform = "rotate(0)";
  }
});

//MASCARA REAL

function formatarPreco(input) {
  var valor = input.value.replace(/\D/g, "");

  valor = (valor / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2 });

  input.value = valor;
}

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

  localStorage.setItem(
    "list__item-perifericos",
    JSON.stringify(itensPerifericos)
  );

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
