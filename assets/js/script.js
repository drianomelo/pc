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

btnPeca.addEventListener("click", () => {
  modalPeca.style.display = "block";
});

btnPerifericos.addEventListener("click", () => {
  modalPeriferico.style.display = "block";
});

btnAdd.addEventListener("click", () => {
  modalPeriferico.style.display = "none";
  modalPeca.style.display = "none";
});
