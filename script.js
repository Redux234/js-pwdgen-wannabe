let nome = prompt("Inserire Nome")
let cognome =prompt('Inserire Cognome')
let colore_preferito = prompt('Inserire il colore preferito')
let numero1 = prompt('Scegliere un numero da 1 a 100')
let numero2 = prompt('Sceglere un altro numero')

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






document.getElementById("Password").innerHTML = nome + cognome + colore_preferito;