 import { ContaBancaria } from "./poo_02"
 import PromptSync from "prompt-sync"
const prompt = PromptSync()


let clin1 = new ContaBancaria()
clin1.nomeTitular = prompt("Digite o nome: ")
clin1.numeroConta= prompt("Digite o numero de sua conta ")



let clin2 = new ContaBancaria()
clin2.nomeTitular = prompt("Digite o nome: ")
clin2.numeroConta= prompt("Digite o numero de sua conta ")
