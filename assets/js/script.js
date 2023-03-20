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

const form = document.querySelector("#novoItem");
const itens = JSON.parse(localStorage.getItem("itens")) || [];
const lista = document.querySelector(".list__lista");
const precoList = document.querySelector(".list__preco");

itens.forEach((elemento) => {
  criaElemento(elemento);
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = evento.target.elements["nome"];
  const preco = evento.target.elements["preco"];

  const existe = itens.find((elemento) => elemento.nome === nome.value);

  const itemAtual = {
    nome: nome.value,
    preco: preco.value,
  };

  if (existe) {
    itemAtual.id = existe.id;

    atualizaElemento(itemAtual);

    itens[itens.findIndex((elemento) => elemento.id === existe.id)] = itemAtual;
  } else {
    itemAtual.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0;

    criaElemento(itemAtual);

    itens.push(itemAtual);
  }

  localStorage.setItem("itens", JSON.stringify(itens));

  nome.value = "";
  preco.value = "";
});

function criaElemento(item) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("list__item");
  novoItem.innerHTML += item.nome;
  novoItem.dataset.id = item.id;

  novoItem.appendChild(botaoDeleta(item.id));

  lista.appendChild(novoItem);
}

function atualizaElemento(item) {
  document.querySelector("[data-id='" + item.id + "']").innerHTML = item.preco;
}

function botaoDeleta(id) {
  const btnFecharItem = document.createElement("button");
  btnFecharItem.classList.add("list__btn");
  const iconFechar = document.createElement("i");
  iconFechar.classList.add("fa-solid");
  iconFechar.classList.add("fa-xmark");
  btnFecharItem.appendChild(iconFechar);

  btnFecharItem.addEventListener("click", function () {
    deletaElemento(this.parentNode, id);
  });

  return btnFecharItem;
}

function deletaElemento(tag, id) {
  tag.remove();

  itens.splice(
    itens.findIndex((elemento) => elemento.id === id),
    1
  );

  localStorage.setItem("itens", JSON.stringify(itens));
}
