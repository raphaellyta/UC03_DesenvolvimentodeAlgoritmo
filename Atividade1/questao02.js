import PromptSync from "prompt-sync"
const pront = PromptSync()

let nome_produto =(pront('Digite o nome do Produto: '))

let preco_produto= Number (pront('Digite o valor do Produto:'))

if(preco_produto<=0){
    console.log('O valor do produto precisa ser maior que 0(ZERO)')
    
 }

let descont_produto_cliente= Number(pront('Digite o desconto do Produto'))
let valor_desconto = (preco_produto*descont_produto_cliente)/100
if(valor_desconto<0 || descont_produto_cliente>100){
    console.log('Desconto precisa ser entre 0 e 100% ')
     
   }

let preco_final = preco_produto -valor_desconto
console.log(`Dados da Compra: ${nome_produto} , ${preco_produto.toFixed(2)} Valor Final com desconto de: ${preco_final.toFixed(2)}`)