console.log('form biglietto treno');

// prendere i dati che l'utente inserisce tramite il form
//il primo dato sono i km del viaggio
// dichiaro una const per l'input con id=km e lo prendo dal dom con getElemenytById
const inputKmElement = document.getElementById('km'); //stringa
console.log(inputKmElement);
//dichiaro una const per stampare i km nella schermata
const pTravelElement = document.getElementById('travel-km')


//il secondo è l'età del passeggero
// dichiaro una const per l'input con id=eta e lo prendo dal dom con getElemenytById
const inputEtaElement = document.getElementById('eta'); //stringa
console.log(inputEtaElement);
//dichiaro una const per stampare i km nella schermata
const pAgeElement = document.getElementById('age')
// dichiaro una const per l'input con id=submit e lo prendo dal dom con getElemenytById
const submitElement = document.getElementById('submit'); //stringa

// dichiaro una const per l'input con id=refresh e lo prendo dal dom con getelementById
const refreshElement = document.getElementById('refresh')

//recupero un terzo dato che è il nome e cognome del passeggero
// dichiaro una const per l'input con id=fullname e lo prendo dal dom con getElemenytById

const inputNameElement = document.getElementById('first-name');
const inputLastNameElement = document.getElementById('last-name');
//dichiaro una const per stampare il nome completo nella schermata
const pNAmeElement = document.getElementById('ps-name');
const pSurnameElement = document.getElementById('ps-surname');

//dichiaro  le variabili che andrò a trattare cliccando su invia
let km, eta, prezzoBase, sconto, prezzoFinale, nome, cognome;
//quando l'utente clicca invia noi recuperiamo i value di queste 2 input 
//più la value di fullname
//e verrà stampato il prezzo base e quello finale con sconto applicato



submitElement.addEventListener('click', function(){
    console.log('invia');
    //prendo la value di inputKmElement e la converto in numero
    km = parseFloat(inputKmElement.value);// number
//prendo la value di inputEtaElement
    eta = (inputEtaElement.value);
//prendo la value di inputFullNameElement
    nome = (inputNameElement.value);
    cognome = (inputLastNameElement.value);
//stampo i 3 dati  
    console.log('km ',km);
    console.log('età ',eta);
    console.log('Nome e Cognome: ',nome ,cognome);

    if(km > 0 && 
       eta > 0 &&
       !isNaN(km) &&
       !isNaN(eta)){
        console.log('km ',km);
        console.log('età ',eta);
        console.log('Nome e Cognome: ',nome ,cognome);
       } else{
        alert('i dati inseriti non sono validi')
       }
//sulla base di questo calcolare il prezzo del biglietto in base a
    //prezzo base che è dato da il numero dei km per 0.21
    prezzoBase = km * 0.21;
    console.log('prezzo base: ',prezzoBase);
    const pDiscountElement = document.getElementById('discount');
    const pLastPriceElement = document.getElementById('last-price');
    const pBasePriceElement = document.getElementById('bs-price')
    //il prezzo scontato del 20% se età passeggero minorenne
    if (eta === "minorenne"){
        
        //calcolo lo sconto del 20%
        sconto = prezzoBase * 0.20
        //dichiaro una const per stampare lo sconto nella schermata
    
        console.log('sconto 20% euro: ',sconto.toFixed(2));
        //calcolo il prezzo finale sotraendo lo sconto al prezzo base
        prezzoFinale = prezzoBase - sconto;
        //dichiaro una const per stampare il prezzo finale nella schermata
        const pLastPriceElement = document.getElementById('last-price')
        //il prezzo finale va stampato in console log
        console.log('prezzo finale euro: ',prezzoFinale.toFixed(2));
        //il prezzo scontato del 40% se età passeggero over 65
    } else if (eta === "over65"){
        
        //calcolo lo sconto del 40%
        sconto = prezzoBase * 0.40;
       
        console.log('sconto 40% euro: ',sconto.toFixed(2));
        //calcolo il prezzo finale sotraendo lo sconto al prezzo base
        prezzoFinale = prezzoBase - sconto;
        //il prezzo finale va stampato in console log
        console.log('prezzo finale euro: ',prezzoFinale.toFixed(2));
    } else (eta === "nessuno");{
        sconto = 0;
        prezzoFinale = prezzoBase - sconto;
        console.log('prezzo finale euro: ',prezzoFinale.toFixed(2));
    }
    pNAmeElement.innerHTML += `
        <span>${nome}</span>`;
    pSurnameElement.innerHTML += `
        <span>${cognome}</span>`;
    pTravelElement.innerHTML += `
        <span>${km}</span>`;
    pAgeElement.innerHTML += `
        <span>${eta}</span>`;
    pBasePriceElement.innerHTML += `
        <span>${prezzoBase.toFixed(2)}</span>`;
    pDiscountElement.innerHTML += `
        <span>${sconto.toFixed(2)}</span>`;
    pLastPriceElement.innerHTML += `
        <span>${prezzoFinale.toFixed(2)}</span>`
    
//se l'utente non è minorenne o over 65 pagherà il prezzo base senza sconto 
})

refreshElement.addEventListener('click', function(){
    console.log('aggiorna')
})