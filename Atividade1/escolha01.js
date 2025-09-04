  import PromptSync from "prompt-sync";
  const prompt = PromptSync()
  let valor = Number (prompt(`Digite o valor em real: `))
  let moeda = prompt('Digite a Moeda: ').toUpperCase()

  switch (moeda){
   
    case 'DOLAR':

   
    console.log(`Valor em Real é : ${valor} Conversão para Dólar:  ${(valor / 5.424).toFixed(2)} `)

    break


    case 'EURO':

    
    console.log(`Valor em Real é : ${valor} Conversão para Euro:  ${(valor / 6.353).toFixed(2)} `)

    break

    case 'PESO':

  

    console.log(`Valor em Real é : ${valor} Conversão para Peso:  ${(valor / 0.0042).toFixed(2)} `)

    break

    case 'LIBRA':

   
    console.log(`Valor em Real é : ${valor} Conversão para Libra:  ${(valor / 7.326).toFixed(2)} `)

    break

    case 'FRANCO':
     
    console.log(`Valor em Real é : ${valor} Conversão para Franco:  ${(valor / 6.753).toFixed(2)} `)

    break

    default:

    console.log("Opção Invalida")



 

  }



  