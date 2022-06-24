// Creare un piccolo counter
// Partiamo dal solo body in HTML

// Generiamo da JS due bottoni ed un DIV
let counterValue = 0;
let displayCounter = document.createElement("h2");
const buttonMore = document.createElement("button");
const buttonLess = document.createElement("button");

// Inseriamo gli elementi a schermo
// Nel div avremo sempre a schermo lo stato del nostro counter ("1" oppure "2" oppure "3", ...)
document.body.append(displayCounter, buttonMore, buttonLess);
buttonMore.innerText = "Aumenta";
buttonLess.innerText = "Diminuisci";
displayCounter.innerHTML = counterValue;

// Aggiungere al primo bottone la funzionalità di incremento
// Aggiungere al secondo bottone la funzionalità di decremento
// Bonus:
// mettiamo un limite di decremento a 0
// mettiamo un limite di incremento a 10

// Super bonus:
// Rimuovere il codice duplicato

const clickMore = (event) => {
  if (counterValue < 10) {
    counterValue += 1;
    displayCounter.innerHTML = counterValue;
    document.body.style.backgroundColor = "blue";
  }
};

const clickLess = (event) => {
  if (counterValue > 0) {
    counterValue -= 1;
    displayCounter.innerHTML = counterValue;
    document.body.style.backgroundColor = "white";
  }
};

buttonMore.addEventListener("click", clickMore);
buttonLess.addEventListener("click", clickLess);

// buttonMore.addEventListener("click", () => {
//   if (counterValue < 10) {
//     counterValue += 1;
//     displayCounter.innerHTML = counterValue;
//     document.body.style.backgroundColor = "blue";
//   } else {
//     displayCounter.innerHTML = counterValue;
//   }
// });

// buttonLess.addEventListener("click", () => {
//   if (counterValue > 0) {
//     counterValue -= 1;
//     displayCounter.innerHTML = counterValue;
//     document.body.style.backgroundColor = "white";
//   } else {
//     displayCounter.innerHTML = counterValue;
//   }
// });
