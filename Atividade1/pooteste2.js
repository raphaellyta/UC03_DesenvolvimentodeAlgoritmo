 import { ContaBancaria } from "./poo_02"
 import PromptSync from "prompt-sync"
const prompt = PromptSync()


let clin1 = new ContaBancaria()
clin1.nomeTitular = (prompt("Digite o nome: "))
clin1.numeroAgencia = (prompt("Digite o numero de sua agencia:"))
clin1.numeroConta= prompt("Digite o numero de sua conta ")
clin1.depositar(prompt(`Digite o valor que vai deposição`))
clin1.sacar(prompt(`Digite o valor que vai  Sacar`))
clin1.imprimir()



let clin2 = new ContaBancaria()
clin2.nomeTitular = (prompt("Digite o nome: "))
clin2.numeroAgencia = (prompt("Digite o numero de sua agencia:"))
clin2.numeroConta= prompt("Digite o numero de sua conta ")
clin2.depositar(prompt(`Digite o valor que vai deposição`))
clin2.sacar(prompt(`Digite o valor que vai  Sacar`)) 
clin2.imprimir()