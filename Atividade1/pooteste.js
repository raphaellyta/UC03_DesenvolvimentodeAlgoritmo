import { Cliente } from "./poo_01";
import PromptSync from "prompt-sync"
const prompt = PromptSync()

let clin1 = new Cliente()
clin1.nome = prompt("Digite o nome: ")
clin1.endereco = prompt("Digite seu endereço: ")
clin1.renda = prompt("Digite sua Renda: ")

let clin2 = new Cliente()
clin2.nome = prompt("Digite o nome: ")
clin2.endereco = prompt("Digite seu endereço: ")
clin2.renda = prompt("Digite sua Renda: ")

clin1.imprimir()
clin2.imprimir()