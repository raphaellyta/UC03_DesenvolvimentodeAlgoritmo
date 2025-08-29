import PromptSync from "prompt-sync"
const prompt = PromptSync()

let valor_compra = Number (prompt('Digite o valor de sua Comprar : '))
let valor_desconto
let valor_final

if(valor_compra<=100){

    console.log(`Sua compra foi de R$ ${valor_compra.toFixed(2)} e não possui desconto.`);

}else if(valor_compra>=101 && valor_compra<=500){
   valor_desconto = valor_compra*0.05
   valor_final = valor_compra-valor_desconto

  console.log(`Valor da compra: R$ ${valor_compra.toFixed(2)}`);
  console.log(`Desconto 5%: R$ ${valor_desconto.toFixed(2)}`);
  console.log(`Valor final: R$ ${valor_final.toFixed(2)}`)



}else if(valor_compra>500){

    valor_desconto = valor_compra - 0.10
    valor_final=valor_compra - valor_desconto

  console.log(`Valor da compra: R$ ${valor_compra.toFixed(2)}`);
  console.log(`Desconto 10%: R$ ${valor_desconto.toFixed(2)}`);
  console.log(`Valor final: R$ ${valor_final.toFixed(2)}`);
   

}if(valor_compra > 300 && valor_desconto >= valor_compra * 0.05){
console.log("Você ganhou um cupom bônus para usar na próxima compra!");
}