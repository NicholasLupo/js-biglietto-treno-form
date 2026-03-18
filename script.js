// Dati utente
let km = prompt('Inserisci il numero di chilometri che vuoi percorrere');
console.log(km);

const age = prompt('Inserisci la tua età');
console.log(age);

// Calcolo prezzo base
let price = km * 0.21;

// Calcolo biglietto base
if (age >= 18 && age <= 64) {

    let priceFixed = price.toFixed(2);
    console.log(priceFixed + '€');

    // Calcolo biglietto per minori
} else if (age <= 17 && age >= 0) {

    let sales = price - ((price * 20) / 100);
    let salesFixed = sales.toFixed(2);
    console.log(salesFixed + '€');

    // Calcolo biglietto per over 65    
} else if (age >= 65) {

    let sales = price - ((price * 40) / 100);
    let salesFixed = sales.toFixed(2);
    console.log(salesFixed + '€');

}