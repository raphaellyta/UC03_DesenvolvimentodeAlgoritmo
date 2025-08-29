// Desse jeito vc importa o arquivo:
//import PromptSync from "prompt-sync"

//E aqui vc instancia um objeto:
//const prompt = PromptSync()
// Funciona mas ele da erro de sintaxe - por ser ES6 que é o novo tipo de javascript ou Typescript


// da pra trocar essas duas linhas de cima para essa debaixo:
const prompt = require('prompt-sync')();// Vc literalmente pega a variavel do arquivo importado e coloca na const prompt

let termos = Number(prompt("Digite quantos termos da série de Fibonacci deseja visualizar: "))

let a = 0
let b = 1

console.log("Série de Fibonacci:")

for (let i = 1; i <= termos; i++) {
    console.log(a)
    let proximo = a + b
    a = b
    b = proximo
}