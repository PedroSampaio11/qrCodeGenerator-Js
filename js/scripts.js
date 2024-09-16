const container = document.querySelector(".container");
const qrBtn = document.querySelector("#qr-form button");
const qrInput = document.querySelector("#qr-form input");
const qrImg = document.querySelector("#qr-code img");

// gerar qr code
function generateQrCode() {
  qrCodeInputValue = qrInput.value;

  console.log(qrCodeInputValue);

  if (!qrCodeInputValue) {
    alert(`preencha o campo corretamente.`);
    return;
  }

  qrBtn.innerText = "Gerando código...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrImg.addEventListener("load", () => {
    container.classList.add("active");
    container.style.height = "510px";
    qrBtn.innerText = "Código Gerado";
    qrBtn.style.backgroundColor = "#47FF11";
  });
}

qrBtn.addEventListener("click", () => {
  generateQrCode();
});

qrInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});

// limpar area
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    container.classList.remove("active");
    qrBtn.innerText = "Gerar Código";
    qrInput.innerText = "Digite a URL ou Texto";
    setTimeout(() => {
      location.reload(); // Recarrega a página após o tempo especificado
    }, 500);
  }
});
