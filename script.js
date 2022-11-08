let nome = prompt("Inserire Nome")
let cognome = prompt('Inserire Cognome')
let colore_preferito = prompt('Inserire il colore preferito')
let numero1 = prompt('Scegliere un numero')
let numero2 = prompt('Sceglere un altro numero più piccolo del primo')

console.log(
    `
    -----------Informazioni------------
    Nome: ${nome}
    Cognome: ${cognome}
    Colore preferito: ${colore_preferito}
    Numero 1: ${numero1}
    Numero 2: ${numero2}
    `
)


let risultato = Math.round(numero1 / numero2)





document.getElementById("Password").innerHTML = nome + cognome + colore_preferito + risultato;


console.log(
    ` 
    ------------Password---------------
    Password: ${nome + cognome + colore_preferito + risultato}
    `
)
