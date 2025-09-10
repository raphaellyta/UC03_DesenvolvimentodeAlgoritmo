import promptSync from 'prompt-sync';
const prompt = promptSync();

import { parOuImpar } from './funcao_geral.js';


let numero = Number(prompt("Digite um número para verificar se é par ou ímpar: "));

let resultado = parOuImpar(numero); 
 console.log(`O número ${numero} é ${resultado}.`)