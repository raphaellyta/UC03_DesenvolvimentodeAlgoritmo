
import PromptSync from "prompt-sync";
const prompt = PromptSync();

export class ContaBancaria{
    #nomeTitular 
    numeroConta  
    numeroAgencia
  #saldo = 0
    dataAbertura



    constructor(nomeTitular, numeroConta , numeroAgencia,saldo,dataAbertura    ){
       this.#nomeTitular = nomeTitular   
       this.numeroConta = numeroConta
       this.numeroAgencia = numeroAgencia
       this.#saldo = saldo
       this.dataAbertura = dataAbertura
    }
    get nomeTitular(){
        return this.#nomeTitular
    }


    get saldo(){
        return this.#saldo
    }

   

    set nomeTitular(novocli){
        this.#nomeTitular = novocli
    }

    set saldo(saldonovo){
        this.#saldo = saldonovo

    }


    sacar(valor){
        if(valor>0){
            this.saldo-=valor
            console.log(`O valor Sacado: ${valor}`)
                }else{
                console.log(`a saldo suficiente`)
                }    }
   

    depositar(valor){
        if(valor>0){
            this.#saldo +=valor
            console.log(`O seu novo saldo ${valor}`)
                             

        }else{

            console.log(`Valor Maior que o saldo`);
            
        }

    }

    calcularRendimento(){

    }

    
 imprimir(){
   

   console.log(`Cliente: ${this.#nomeTitular}\t\tAgencia: ${this.numeroAgencia} - Conta: ${this.numeroConta}.`)
 }



}

