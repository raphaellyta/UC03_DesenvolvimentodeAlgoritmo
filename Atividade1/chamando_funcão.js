import promptSync from 'prompt-sync';
const prompt = promptSync();
// import { parOuImpar } from './funcao_geral.js'; // Preciso prestar atenção e tbm colocar o caminho 


// let numero = Number(prompt("Digite um número para verificar se é par ou ímpar: "));
// let resultado = parOuImpar(numero); 
//  console.log(`O número ${numero} é ${resultado}.`)

  import { gastocalorias } from './funcao_geral.js';


 let modalidade1 = prompt("Digite  tipo de exercicio praticado: Caminhada / Corrida/ Bicicleta:  ").toLowerCase()
 let temp = Number(prompt('Digite o tempo gasto em min: '))
 gastocalorias(modalidade1, temp)
