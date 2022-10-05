//l'inserimento di una variabile
const year= 22;
//console.log(year);

//Chiedi all’utente il suo nome,
const firstName = prompt('Inserisci il tuo Nome');
//console.log(firstName);

//poi chiedi il suo cognome
const lastName = prompt('Inserisci il tuo Cognome');
//console.log(lastName);

//poi chiedi il suo colore preferito
const color = prompt('Inserisci il tuo Colore preferito');
//console.log(color);

//Infine scrivi sulla pagina nomecognomecolorepreferito22
document.getElementById('password').innerHTML =`la tua password sicura è : ${firstName}${lastName}${color}${year}`;