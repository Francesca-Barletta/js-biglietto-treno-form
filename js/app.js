console.log('form biglietto treno');

// prendere i dati che l'utente inserisce tramite il form
//il primo dato sono i km del viaggio
// dichiaro una const per l'input con id=km e lo prendo dal dom con getElemenytById
const inputKmElement = document.getElementById('km'); //stringa
console.log(inputKmElement);

//il secondo è l'età del passeggero
// dichiaro una const per l'input con id=eta e lo prendo dal dom con getElemenytById
const inputEtaElement = document.getElementById('eta'); //stringa
console.log(inputEtaElement);
// dichiaro una const per l'input con id=submit e lo prendo dal dom con getElemenytById
const submitElement = document.getElementById('submit'); //stringa

//dichiaro  le variabili che andrò a trattare cliccando su invia
let km, eta, prezzoBase, sconto, prezzoFinale;
//quando l'utente clicca invia noi recuperiamo i value di queste 2 input 
//e verrà stampato il prezzo base e quello finale con sconto applicato
submitElement.addEventListener('click', function(){
    console.log('invia');
//prendo la value di inputKmElement e la converto in numero
    km = parseFloat(inputKmElement.value);// number
//prendo la value di inputEtaElement e la converto in numero
    eta = parseInt(inputEtaElement.value);//number
    console.log('km ',km);
    console.log('età ',eta);
//sulla base di questo calcolare il prezzo del biglietto in base a
    //prezzo base che è dato da il numero dei km per 0.21
    prezzoBase = km * 0.21;
    console.log('costo ',prezzoBase);
    //il prezzo scontato del 20% se età passeggero minorenne
    if (eta < 18){
        //calcolo lo sconto del 20%
        sconto = prezzoBase * 0.20
        //calcolo il prezzo finale sotraendo lo sconto al prezzo base
        prezzoFinale = prezzoBase - sconto;
        //il prezzo finale va stampato in console log
        console.log('prezzo con sconto del 20% ',prezzoFinale);
        //il prezzo scontato del 40% se età passeggero over 65
    } else if (eta > 65){
        //calcolo lo sconto del 40%
        sconto = prezzoBase * 0.40
        //calcolo il prezzo finale sotraendo lo sconto al prezzo base
        prezzoFinale = prezzoBase - sconto;
        //il prezzo finale va stampato in console log
        console.log('prezzo con sconto del 40% ',prezzoFinale);
    }
    
//se l'utente non è minorenne o over 65 pagherà il prezzo base senza sconto 
})
