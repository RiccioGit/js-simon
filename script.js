console.log("WELCOME!");

/* Un alert espone 5 numeri casuali (univoci).
Poi parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati */

var randomNumbers = [];

for (var i = 0; i < 5; i++) {
  var newNumber = getRandomIntInclusive(1, 100);
  randomNumbers.push(newNumber)
}

console.log("Numeri generati: " + randomNumbers);

alert("Memorizza questi numeri " + randomNumbers)


// AREA DELLE FUNZIONI

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
