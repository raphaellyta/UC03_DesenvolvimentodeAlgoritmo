import PromptSync from "prompt-sync";
const prompt = PromptSync()

let salario = Number(prompt(`Digite o Valor de seu Salário :`).replace(",","."))
let valor_emprestimo = Number(prompt(`Digite o valor do empréstimo desejado: `).replace(",","."))
let num_parcelas = Number(prompt(`Digite o número de parcelas do seu empréstimo: `))


let juros = valor_emprestimo * 0.035 *num_parcelas
let total_emprestimo = valor_emprestimo +juros 
let valor_parcela = total_emprestimo/num_parcelas

//console.log(`Seu salario r$: ${salario.toFixed(2)}|Valor solicitado r$ : ${valor_emprestimo.toFixed(2)}`)
//console.log(`O número de parcelas solicitado: ${num_parcelas.toFixed(2)}| Total de Juros ${juros.toFixed(2)}`)
//console.log(`Total do Emprestimo COM JUROS: R$ ${total_emprestimo.toFixed(2)} |Valor de cada Parcela: r$ ${valor_parcela.toFixed(2)}`)
console.log("\n=== Simulação de Empréstimo ===")
console.log(`Salário: R$ ${salario.toFixed(2)}`)
console.log(`Valor solicitado: R$ ${valor_emprestimo.toFixed(2)}`)
console.log(`Número de parcelas: ${num_parcelas}`)
console.log(`Juros total: R$ ${juros.toFixed(2)}`)
console.log(`Total do empréstimo (com juros): R$ ${total_emprestimo.toFixed(2)}`)
console.log(`Valor de cada parcela: R$ ${valor_parcela.toFixed(2)}`)

if(valor_parcela> salario*0.30){

    console.log(`Empréstimo NEGADO: Sua parcela é maior que 30% do seu salario`,salario)

}else{
    console.log(`Emprestido APROVADO`)
}
