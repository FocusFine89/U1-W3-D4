const containerTitle = document.getElementById("container-title");
const containerTombola = document.getElementById("container-tombola");
const titleTombola = document.getElementById("title");
const br = document.createElement("br");
const main = document.querySelector("main");

//Display Numeri
for (let i = 0; i < 76; i++) {
  const numeroTombola = document.createElement("div");
  numeroTombola.classList.add("numero-tombola");
  numeroTombola.innerText = i + 1;
  numeroTombola.value = i + 1;
  containerTombola.appendChild(numeroTombola);
  //   console.log(numeroTombola.value);
}

//creo bottone e lo aggiungo alla pagina
const rNumbersButton = document.createElement("button");
rNumbersButton.id = "random-number";
rNumbersButton.innerText = "Genera Numero";
containerTombola.appendChild(br);
containerTombola.appendChild(rNumbersButton);

//Funzione che genera un numero casuale
const randomGenerator = () => {
  const randomNumber = Math.round(Math.random() * 76);
  console.log(randomNumber);
  return randomNumber;
};

//collego il Numero casuale con la cella del numero
const numeroTombola = document.querySelectorAll(".numero-tombola");
rNumbersButton.onclick = (event) => {
  const rNumGen = randomGenerator();
  for (let i = 0; i < 76; i++) {
    if (numeroTombola[i].value === rNumGen) {
      numeroTombola[i].classList.add("casella-colorata");
    }
  }
};
