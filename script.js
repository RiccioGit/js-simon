console.log("WELCOME!");

/* Un alert espone 5 numeri casuali (univoci).
Poi parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati */

//Array in cui verranno generati i numeri random

var randomNumbers = [];

// condizioni

for (var i = 0; i < 5; i++) {
  var newNumber = getRandomIntInclusive(1, 100);
  randomNumbers.push(newNumber)
}

console.log("Numeri generati: " + randomNumbers);

// mostriamo all'utente i numeri da memorizzare tramite alert

alert("Memorizza questi numeri " + randomNumbers);

// settiamo 30 secondi di timer
// l'utente deve inserire i numeri che ricorda utilizzando prompt

setTimeout(function () {



}, 3000);




// *_*_*_*_*_ AREA DELLE FUNZIONI _*_*_*_*_*

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
