import PromptSync from "prompt-sync"
const prompt = PromptSync()

let temperaturas = []
let soma = 0
let meses = [  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"]


console.log("Digite a temperatura média de cada mês do ano:")
for (let i = 0; i < 12; i++) {
  let temp = parseFloat(prompt(`Temperatura média de ${meses[i]}: `))
  temperaturas.push(temp)
  soma = soma + temp
}

// Cálculo da média anual
let mediaAnual = soma / 12

// Saída
console.log(`\nMédia anual das temperaturas: ${mediaAnual.toFixed(2)}°C\n`)
console.log("Meses com temperatura acima da média:\n");

for (let i = 0; i < 12; i++) {
  if (temperaturas[i] > mediaAnual) {
    console.log(`${meses[i]} - ${temperaturas[i]}°C`)
  }
}