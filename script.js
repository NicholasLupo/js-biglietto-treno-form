// Dati utente
const km = document.getElementById('distance');
const age = document.getElementById('user');

//Collegamento bottone
const btn = document.getElementById('send');
btn.addEventListener('click', getPrice(km, age))

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

    }
}