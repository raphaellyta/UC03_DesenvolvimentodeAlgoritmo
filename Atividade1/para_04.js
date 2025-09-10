import PromptSync from "prompt-sync"
const prompt = PromptSync()

    let total = 0
    let num_mercadorias = 0


while(true){
    let preco = parseFloat(prompt(`Digite o valor da Mercadoria (0 para Finalizar operação)`))

    if(preco===0){
        break
    }

    let soma = total + preco
    num_mercadorias ++


} console.log(`Total da Compra foi ${soma}`)

let pagamento = parseFloat(prompt(`Digite o valor pago pelo cliente`))
let troco = pagamento - soma

console.log(`O valor pago foi ${pagamento.toFixed(2)} | Troco de : ${troco.toFixed(2)} e a quantidade de produtos : ${num_mercadorias}`)





