console.log('form biglietto treno');

// prendere i dati che l'utente inserisce tramite il form
//il primo dato sono i km del viaggio

const inputKmElement = document.getElementById('km'); //stringa
console.log(inputKmElement);
//il secondo è l'età del passeggero

const inputEtaElement = document.getElementById('eta'); //stringa
console.log(inputEtaElement);

const submitElement = document.getElementById('submit'); //stringa


let km, eta, prezzoBase, sconto, prezzoFinale;
//quando l'utente clicca invia noi recuperiamo i value di queste 2 input
submitElement.addEventListener('click', function(){
    console.log('invia');

    km = parseFloat(inputKmElement.value);// number
    eta = parseInt(inputEtaElement.value);//number
    console.log('km ',km);
    console.log('età ',eta);
//sulla base di questo calcolare il prezzo del biglietto in base a
    //prezzo base che è dato da il numero dei km per 0.21

    prezzoBase = km * 0.21;
    console.log('costo ',prezzoBase);
    //il prezzo scontato del 20% se età passeggero minorenne
    if (eta < 18){
        sconto = prezzoBase * 0.20
        prezzoFinale = prezzoBase - sconto;
        //il prezzo finale va stampato in console log
        console.log('prezzo con sconto del 20% ',prezzoFinale);
        //il prezzo scontato del 40% se età passeggero over 65
    } else if (eta > 65){
        sconto = prezzoBase * 0.40
        prezzoFinale = prezzoBase - sconto;
        //il prezzo finale va stampato in console log
        console.log('prezzo con sconto del 40% ',prezzoFinale);
    }
    

})

//il prezzo finale va stampato in console log