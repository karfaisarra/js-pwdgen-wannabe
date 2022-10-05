//l'inserimento di una variabile
const num= 22;
//console.log(num);

//Chiedi all’utente il suo nome,
const first_name = prompt('Inserisci il tuo nome');
//console.log(first_name);

//poi chiedi il suo cognome
const last_name = prompt('Inserisci il tuo cognome');
//console.log(last_name);

//poi chiedi il suo colore preferito
const color = prompt('Inserisci il tuo colore preferito');
//console.log(color);

//Infine scrivi sulla pagina nomecognomecolorepreferito22
document.getElementById('password').innerHTML =`la tua password sicura è : ${first_name}${last_name}${color}${num}`;