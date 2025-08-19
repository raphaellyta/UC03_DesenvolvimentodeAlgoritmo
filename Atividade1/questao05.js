import PromptSync from "prompt-sync"
const pront = PromptSync()

let distancia = Number(prompt('Digite a distância em km: '))

let preco_por_km = distancia * 5
let taxa_fixa = 10
let valor_final = preco_por_km + taxa_fixa

console.log(`Preço por km: R$ ${preco_por_km.toFixed(2)}`)
console.log(`Taxa fixa: R$ ${taxa_fixa.toFixed(2)}`)
console.log(`Valor final da entrega: R$ ${valor_final.toFixed(2)}`)