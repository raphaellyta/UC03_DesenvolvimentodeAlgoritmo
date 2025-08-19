
import PromptSync from "prompt-sync"

const pront = PromptSync()
let idadeanos= Number (pront('Digite sua idade: '))
const idadeemdias =365

let resul = idadeanos*idadeemdias


console.log(`Resultado: ${idadeanos} * ${idadeemdias} = ${resul}`)
