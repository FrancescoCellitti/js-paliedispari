
function contrario(word) {
    let reverse = '';
    for (let i = word.length - 1; i >= 0; i--) {
        const letter = word.charAt(i)
        reverse = reverse + letter

    }
    if (reverse == word) {
        console.log('palindroma')

    } else {
        console.log('non palindroma')

    }

}
const parola = prompt('inserire una parola')
contrario(parola)
 



function pariDispari(numero, numeroPc) {
    const sum = numero + numeroPc
    if (numeroUtente > 5) {
        console.log('scelta del numero non conforme')
    } else if (sum % 2 == 0 && utentChoice == 'pari') {
        console.log('hai vinto')
    } else if (sum % 2 != 0 && utentChoice == 'dispari') {
        console.log('hai vinto')
    } else {
        console.log('hai perso')
    }


}


const numeroCasuale = Math.floor((Math.random() * 5) + 1)
const numeroUtente = Number(prompt('scegli un numero tra 1 e 5'))
const utentChoice = parseInt(prompt('scegli pari o dispari'))
console.log(numeroCasuale, numeroUtente);
pariDispari(numeroUtente, numeroCasuale)
