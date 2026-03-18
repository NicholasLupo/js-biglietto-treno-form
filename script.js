// Dati utente
const km = document.getElementById('distance');
const age = document.getElementById('user');

//Collegamento form
const form = document.querySelector('form');
form.addEventListener('submit', function (e){

    e.preventDefault();
    getPrice(km.value, age.value)

})

//Calcolo biglietto
function getPrice(distance, years) {

    // Calcolo prezzo base
    let price = distance * 0.21;

    // Calcolo biglietto base
    if (years >= 18 && years <= 64) {

        let priceFixed = price.toFixed(2);
        console.log(priceFixed + '€');

        // Calcolo biglietto per minori
    } else if (years <= 17 && years >= 0) {

        let sales = price - ((price * 20) / 100);
        let salesFixed = sales.toFixed(2);
        console.log(salesFixed + '€');

        // Calcolo biglietto per over 65
    } else if (years >= 65) {

        let sales = price - ((price * 40) / 100);
        let salesFixed = sales.toFixed(2);
        console.log(salesFixed + '€');

        // Errore se l'età è un numero negativo
    } else {

        console.log("Errore nell'inserimento dell'età, ritenta");

    }
}