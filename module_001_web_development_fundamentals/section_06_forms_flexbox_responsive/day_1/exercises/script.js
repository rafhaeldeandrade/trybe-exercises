const btnSubmit = document.getElementById("btn-submit");
const btnReset = document.getElementById("btn-reset");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputCpf = document.getElementById("cpf");
const inputAddress = document.getElementById("address");
const inputCity = document.getElementById("city");
const inputState = document.getElementById("state");
const houseType = document.getElementById("house");
const apartmentType = document.getElementById("apartment");

const states = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Espírito Santo",
  "Goías",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
  "Distrito Federal",
];

function insereEstados() {
  for (let estado of states) {
    let option = document.createElement("option");
    option.setAttribute("value", estado);
    option.innerText = estado;
    inputState.appendChild(option);
  }
}

insereEstados();

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
});
