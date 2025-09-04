import PromptSync from "prompt-sync"
const prompt = PromptSync()

let vetor1 = []
let vetor2 = []
let vetor3 = []

console.log("Digite 5 elementos para o primeiro vetor:")

for (let i = 0; i < 5; i++) {
  let valor = prompt(`Elemento ${i + 1} do vetor1: `)
  vetor1.push(valor);
}

console.log("Digite 5 elementos para o segundo vetor:")
for (let i = 0; i < 5; i++) {
  let valor = prompt(`Elemento ${i + 1} do vetor2: `)
  vetor2.push(valor)
}
for (let i = 0; i < 5; i++){

      vetor3.push(vetor1)
      vetor3.push(vetor2)
}



console.log("Vetor 1:", vetor1)
console.log("Vetor 2:", vetor2)
console.log("Intercalado: ", vetor3)
