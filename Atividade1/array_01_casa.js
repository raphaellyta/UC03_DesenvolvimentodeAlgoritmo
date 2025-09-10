import PromptSync from "prompt-sync"
const promt = PromptSync()

let texto = promt("Digite o seu Artigo para a edição e analise: ")
let ofensiva =["porra", "caralho", "puta que pariu", "fdp",  "merda"]

let palavras = texto.split(" ")
let contador= 0
let verificando_palavras = 0

for(let i = 0; i< palavras.length;i++){
    let palavras = palavras[i].toLowerCase()

    if(ofensiva.includes(palavras)){
      palavras[i]= "****"
      contador++
    }

}

let texto_final = palavras.join(" ")

console.log("Texto Final Publicado foi :")
console.log(texto_final)
console.log(`Total de Palavras Ofensivas substituídas fora: ${contador}`)