import PromptSync from "prompt-sync"
const promt = PromptSync()

let largura = Number (promt('Digite a Largura para calcular  a área do perímetro do Retângulo: '))
let altura = Number(promt('Digite a Altura para calcular  a área do perímetro do Retângulo: '))
let cal_area = largura*altura
let cal_perimetro= 2*(largura+altura)
console.log(`Cálculo da Área: ${cal_area.toFixed(2)}, Cálculo do Perímetro: ${cal_perimetro.toFixed(2)}`)