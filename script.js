// Dati utente
const km = document.getElementById('distance');
const age = document.getElementById('user');
const name = document.getElementById('username');

//Collegamento valori ticket
const nameTicket = document.getElementById('name');

//Collegamento form
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {

    e.preventDefault();

    //Valori che appariranno in pagina
    getPrice(km.value, age.value)
    getCP();
    getTrain();
    nameTicket.innerText = this.name.value;

})

//Generatore di codici casuali
const getCP = () => {

    const numCPPage = document.getElementById('code');

    const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let risultato = '';
    for (let i = 0; i < 8; i++) {

        let partCP = character.charAt(Math.floor(Math.random() * character.length));
        risultato += partCP;

    }

    numCPPage.innerText = risultato;

}

const getTrain = () => {

    const numTrainPage = document.getElementById('carriage');
    let numTrain = Math.floor(Math.random() * 9999) + 1;
    numTrainPage.innerText = numTrain;

}

//Calcolo biglietto
function getPrice(distance, years) {

    //Collegamento pagina
    const result = document.getElementById('result');
    const ticketType = document.getElementById('sales');

    // Calcolo prezzo base
    let price = distance * 0.21;

    //Se la distanza inserita non sia un numero negativo
    if (distance >= 0) {

        // Calcolo biglietto base
        if (years >= 18 && years <= 64) {

            let priceFixed = price.toFixed(2);
            let standardPrice = 'Biglietto Standard';

            ticketType.innerText = standardPrice;
            result.innerText = priceFixed + '€';

            // Calcolo biglietto per minori
        } else if (years <= 17 && years >= 0) {

            let sales = price - ((price * 20) / 100);
            let priceFixed = sales.toFixed(2);
            let minorPrice = 'Biglietto per Minori 20%';

            ticketType.innerText = minorPrice;
            result.innerText = priceFixed + '€';

            // Calcolo biglietto per over 65
        } else if (years >= 65) {

            let sales = price - ((price * 40) / 100);
            let priceFixed = sales.toFixed(2);
            let overPrice = 'Biglietto per Anziani 40%';

            ticketType.innerText = overPrice;
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