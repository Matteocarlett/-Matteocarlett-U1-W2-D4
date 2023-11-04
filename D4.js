/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/


function area (l1, l2){
  return l1 * l2
}
let result = area(12, 6)
alert(result)


/* ESERCIZIO 2
Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
la loro somma moltiplicata per tre.
*/

function crazySum (){
  let numero1 = parseInt(prompt("insierisci numero 1"))
  let numero2 = parseInt(prompt("insierisci numero 2"))
  if (numero1 === numero2){
      return(numero1 + numero2) * 3
  }else{
      return numero1 + numero2
  }
}
let risultato = crazySum()
console.log(risultato)

/* ESERCIZIO 3
Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff (){
  let numeroFornito = parseInt(prompt("insierisci un numero"))
  let differenzaAssoluta = Math.abs(numeroFornito - 19)

if (numeroFornito > 19) {
  return differenzaAssoluta * 3
} else {
  return differenzaAssoluta
}
}
let risultato1 = crazyDiff()
console.log(risultato1)

/* ESERCIZIO 4
Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
se n è uguale a 400.
*/

function boundary (){
  let n = parseInt(prompt("insierisci un numero"))
  return(n >= 20 && n <= 100 || n === 400)
}
let risultato2 = boundary()
alert(risultato2)

/* ESERCIZIO 5
Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
ritornare la stringa originale senza alterarla.
*/

function epify (){
  let stringa = prompt("insierisci qualcosa")
  if (stringa.startsWith("EPICODE")) {
      return stringa
  } else {
      return "EPICODE " + stringa
  }
}
let risultato3 = epify()
alert(risultato3)


/* ESERCIZIO 6
Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7() {
  let num = parseInt(prompt("Inserisci un numero postivo"))
  
  if (num > 0 && (num % 3 === 0 || num % 7 === 0)) {
    return true
  } else {
    return false
  }
}

let risultato4 = check3and7()

if (risultato4) {
  alert("Il numero è un multiplo di 3 o 7")
} else {
  alert("Il numero non è multiplo di 3 o 7 ")
}

/* ESERCIZIO 7
Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(){
  let testo = prompt("Inserisci testo: ")
  let stringaInvertita = testo.split("").reverse().join("")
  return stringaInvertita
}
let risultato5 = reverseString()
alert(risultato5)

/* ESERCIZIO 8
Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa
*/

function upperFirst(){
  let inseriscitesto = prompt("Inserisci testo qua")
  let parole = inseriscitesto.split(" ")
  let paroleMaiuscole = parole.map(function(parola) {
  return parola.charAt(0).toUpperCase() + parola.slice(1)
});
  return paroleMaiuscole.join(" ")
}
let stringaMaiuscole = upperFirst()
alert(stringaMaiuscole)

/* ESERCIZIO 9
Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
della stringa originale.
*/

function cutString() {
  let parametro = prompt("Inserisci testo")
  
  if (parametro.length >= 2) {
    let nuovoParametro = parametro.slice(1, -1)
    return nuovoParametro;
  } else {
  }
}

let risultato6 = cutString();
alert(risultato6);

/* ESERCIZIO 10
Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom() {
  let numeri = parseInt(prompt("Inserisci un numero"))
  let numeriCasuali = []

  if (isNaN(numeri) || numeri < 1) {
    alert("Inserisci un numero valido")
    return null
  }

  for (let i = 0; i < numeri; i++) {
    let numeroCasuale = Math.floor(Math.random() * 11)
    numeriCasuali.push(numeroCasuale)
  }

  return numeriCasuali
}

let risultato7 = giveMeRandom()

if (risultato7 !== null) {
  console.log(risultato7)
}