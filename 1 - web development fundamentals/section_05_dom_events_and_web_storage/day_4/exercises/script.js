const backgroundColor = document.querySelector("#cor-de-fundo");
const fontSize = document.querySelector("#tamanho-da-fonte");
const fontColor = document.querySelector("#cor-da-fonte");
const espacamentoLinhas = document.querySelector("#espacamento-linhas");
const fontFamily = document.querySelector("#tipo-da-fonte");
const buttonSave = document.getElementById("salvar");

if (localStorage.length > 0) {
  const getBackGroundColor = localStorage.getItem("backgroundColor");
  const getFontSize = localStorage.getItem("fontSize");
  const getFontColor = localStorage.getItem("fontColor");
  const getEspacamentoLinhas = localStorage.getItem("espacamentoLinhas");
  const getFontFamily = localStorage.getItem("fontFamily");

  document.body.style.backgroundColor = getBackGroundColor;
  document.body.style.fontSize = getFontSize;
  document.body.style.color = getFontColor;
  document.body.style.lineHeight = getEspacamentoLinhas;
  document.body.style.fontFamily = getFontFamily;

  for (let i = 0; i < 3; i += 1) {
    backgroundColor.children[i].removeAttribute("selected");
    fontSize.children[i].removeAttribute("selected");
    fontColor.children[i].removeAttribute("selected");
    espacamentoLinhas.children[i].removeAttribute("selected");
    fontFamily.children[i].removeAttribute("selected");
  }

  for (let i = 0; i < 3; i += 1) {
    if (backgroundColor.children[i].value === getBackGroundColor) {
      backgroundColor.children[i].setAttribute("selected", "selected");
    }

    if (fontSize.children[i].value === getBackGroundColor) {
      fontSize.children[i].setAttribute("selected", "selected");
    }

    if (fontColor.children[i].value === getBackGroundColor) {
      fontColor.children[i].setAttribute("selected", "selected");
    }

    if (espacamentoLinhas.children[i].value === getBackGroundColor) {
      espacamentoLinhas.children[i].setAttribute("selected", "selected");
    }

    if (fontFamily.children[i].value === getBackGroundColor) {
      fontFamily.children[i].setAttribute("selected", "selected");
    }
  }
}

buttonSave.addEventListener("click", () => {
  localStorage.setItem("backgroundColor", backgroundColor.value);
  localStorage.setItem("fontSize", fontSize.value);
  localStorage.setItem("fontColor", fontColor.value);
  localStorage.setItem("espacamentoLinhas", espacamentoLinhas.value);
  localStorage.setItem("fontFamily", fontFamily.value);

  document.body.style.backgroundColor = backgroundColor.value;
  document.body.style.fontSize = fontSize.value;
  document.body.style.color = fontColor.value;
  document.body.style.lineHeight = espacamentoLinhas.value;
  document.body.style.fontFamily = fontFamily.value;
});
