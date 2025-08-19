
import PromptSync from "prompt-sync"

const pront = PromptSync()
let valor1= Number (pront('Digite Primeiro Valor: '))
let valor2= Number (pront('Digite o segundo Valor:'))
let result = valor1+valor2
let media = (valor1+valor2)/3


console.log(`Resultado: ${valor1} + ${valor2} = ${result}`)
console.log(typeof result)


let nome = 'Rafaela'
let nome2 = 'Seriado'
let idade = 33
console.log(`Hello Dexter Morgan ${nome2}`)
console.log("\n")
console.log("Hello World",nome)
console.log('Nasci em Natal Rn',"Tenho",idade)
idade = 34
console.log("Nova Idade:",idade) 