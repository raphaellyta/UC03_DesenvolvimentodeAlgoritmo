  import PromptSync from "prompt-sync";
  const prompt = PromptSync()

let valor_unico = 6.99

console.log("Quantidade    Preço")

for (let i = 1; i <= 50; i++) {
  let preco = i * valor_unico
   console.log(`${i}  R$ ${preco.toFixed(2)}`)
}