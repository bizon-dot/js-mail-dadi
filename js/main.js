/*
        !TODO:
        
        // 1.  **Mail**
        Chiedi all’utente la sua email,
        controlla che sia nella lista di chi può accedere,
        stampa un messaggio appropriato sull’esito del controllo.

        // 2.  **Gioco dei dadi**
        Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
        Stabilire il vincitore, in base a chi fa il punteggio più alto.
        Prima di partire a scrivere codice poniamoci qualche domanda:
        Che ci sia un array da qualche parte?
        Se dobbiamo confrontare qualcosa che "cosa" ci serve?


*/

/*  

    ====================================================================================================
        1. Chiedo l'email all'utente tramite prompt e uso trim per rimuovere i possibili spazi bianchi
    ====================================================================================================
    
*/

function userDataInput() {
    var user_email = (prompt(`Inserisci la tua email:`)).trim();
    return user_email;
}

/*  

    ====================================================================================================
        2. Controllo che la email inserita sia presente nell'array e stampo il messaggio adeguato 
    ====================================================================================================
    
*/

function isThisUserAllowed(user_mail) {

    // Dichiaro un array di email fittizie su cui effettuare il controllo 

    emails = ["linustorvalas@tux.com", "stallman@opensource.com", "terrydavis@templeos.com"];

    // Controllo che la email sia presente nell'array

    if (emails.includes(user_mail)) {
        console.log("Utente loggato");
        DiceGame();

    } else {
        console.log("Utente non riconosciuto")

    }
}

/*  

    ====================================================================================================
        4. Gioco dei dadi
        
            1. genero due numeri random (uno per il PC, uno per l'utente)
            
            2. confronto e stabilisco il vincitore

    ====================================================================================================
    
*/

function DiceGame() {
    var pc_random_num = Math.floor((Math.random() * 10) + 1);
    var user_random_num = Math.floor((Math.random() * 10) + 1);
   
    if (pc_random_num > user_random_num) {
        console.log(`You lose!`);
        console.log(`PC:` + pc_random_num);
        console.log(`User:` + user_random_num);
    }
    else if (pc_random_num < user_random_num) {
        console.log(`User:` + user_random_num);
        console.log(`PC:` + pc_random_num);
        console.log(`You win!`);
        console.log(`User:` + user_random_num);

    } else if (pc_random_num < user_random_num) {
        console.log("Draw");
        console.log(`PC:` + pc_random_num);
        console.log(`User:` + user_random_num);
    }
}


/*  

    ====================================================================================================
         Main 
    ====================================================================================================
    
*/

function main() {
    user_mail = userDataInput();
    isThisUserAllowed(user_mail);
}

main();