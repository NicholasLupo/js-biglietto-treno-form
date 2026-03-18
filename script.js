// Dati utente
const km = document.getElementById('distance');
const age = document.getElementById('user');

//Collegamento form
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {

    e.preventDefault();
    getPrice(km.value, age.value)

})

//Calcolo biglietto
function getPrice(distance, years) {

    //Collegamento pagina
    const result = document.getElementById('result');

    // Calcolo prezzo base
    let price = distance * 0.21;

    //Se la distanza inserita non sia un numero negativo
    if (distance >= 0) {

        // Calcolo biglietto base
        if (years >= 18 && years <= 64) {

            let priceFixed = price.toFixed(2);
            result.innerText = priceFixed + '€';

            // Calcolo biglietto per minori
        } else if (years <= 17 && years >= 0) {

            let sales = price - ((price * 20) / 100);
            let priceFixed = sales.toFixed(2);
            result.innerText = priceFixed + '€';

            // Calcolo biglietto per over 65
        } else if (years >= 65) {

            let sales = price - ((price * 40) / 100);
            let priceFixed = sales.toFixed(2);
            result.innerText = priceFixed + '€';

            // Errore se l'età è un numero negativo
        } else {

            let error = "Errore nell'inserimento dell'età, ritenta";
            result.innerText = error;

        }

        //Errore se i kilometri sono negativi
    } else {

        let error = "Errore nell'inserimento dei kilometri, ritenta";
        result.innerText = error;

    }
}