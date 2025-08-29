
//import PromptSync from "prompt-sync"
const prompt = require('prompt-sync')();

//const prompt = PromptSync()
let idadeanos = Number (prompt('Digite sua idade: '))
const idadeemdias =365

let resul = idadeanos*idadeemdias


console.log(`Resultado: ${idadeanos} * ${idadeemdias} = ${resul}`)
