import PromptSync from "prompt-sync"
const pront = PromptSync()

let conta = Number (pront('Digite o valor da conta em Real: '))
let n_pessoas = Number (pront('Digite a quantidade de pessoas que tem na mesa: '))

let taxa = conta * 0.10
let total_conta_taxa = conta + taxa
let valor_por_pessoa = total_conta_taxa/n_pessoas

console.log(`\nValor da conta sem taxa: R$ ${conta.toFixed(2)}`)
console.log(`Taxa de serviço (10%): R$ ${taxa.toFixed(2)}`)
console.log(`Valor total com taxa: R$ ${total_conta_taxa.toFixed(2)}`)
console.log(`Cada pessoa deve pagar: R$ ${valor_por_pessoa.toFixed(2)}`)