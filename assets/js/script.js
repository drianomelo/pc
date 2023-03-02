const btnModal = document.querySelector(".main__btn");
const iconBtnModal = document.querySelector(".icon");
const modal = document.querySelector(".modal");

btnModal.addEventListener("click", () => {
  if (modal.style.opacity == "0") {
    modal.style.opacity = "1";
    modal.style.top = "15%";
    btnModal.style.backgroundColor = "#ed6077";
    iconBtnModal.style.transform = "rotate(45deg)";
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
const btnAdd = document.querySelector(".btn");
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

btnAdd.addEventListener("click", () => {
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
const formPerifericos = document.querySelector("#form-perifericos");

formPecas.addEventListener("submit", (evento) => {
  evento.preventDefault();
  evento.target.elements["nome"].value;
  evento.target.elements["preco"].preco;
});
