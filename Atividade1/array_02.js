import PromptSync from "prompt-sync"
const prompt = PromptSync();

let array_principal = [];  
let array_consoante = [];   

for (let i = 0; i < 5; i++) {   
  let caractere = prompt(`Digite o ${i + 1}º caractere: `).toLowerCase()

  
  if (caractere >= "a" && caractere <= "z") {
    array_principal.push(caractere) 

   
    if (caractere != "a" && caractere != "e" && caractere != "i" && caractere != "o" && caractere != "u") {
      array_consoante.push(caractere)
    }
  } else {
    console.log(" Digite apenas letras!")
    i--
  }

  
}

console.log("Vetor principal:", array_principal)
console.log("Quantidade de consoantes:", array_consoante.length)
console.log("Vetor consoantes:", array_consoante)