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
