
import PromptSync from "prompt-sync";
const prompt = PromptSync();



class pessoa {

    #cpf
    constructor(nome,cpf,datanasc){
        this.nome
        this.#cpf
        this.datanasc

    }

    get cpf(){
        return this.#cpf
    }

    set cpf(novo_cpf){
        this.#cpf=novo_cpf

    }

    exibirinfor(){
        console.log(`Nome: ${this.nome}, CPF: ${this.#cpf}, Data de Nascimento : ${this.datanasc}`)

    }

}

class funcionario extends pessoa{

    #matricula
    #salario
    desconto 
    


    constructor(cargo,salario,matricula){
        super(nome,idade)
        this.cargo
        this.#salario
        this.#matricula
    }


      get salario(){
        return this.#salario
    }

    set salario(novo_salario){
        this.#salario= novo_salario

    }

    get matricula(){
        return this.#matricula
    }

    set matricula(nova_matricula){
        this.#matricula=nova_matricula
    }



    exibirinfor(){
        super.exibirinfor()
        console.log(`O Cargo é: ${this.cargo}, Salario: ${this.salario}, Matricula: ${this.#matricula}`)


    }

    cal_horaextraExtra(quat_horas){

        
        let valordehora = quat_horas *15
        // console.log(`Suas Horas extras ${valordehora}`) 
        return valordehora

     

    }



  cal_salario_final(){
        
         let valordehora_final = this.cal_horaextraExtra()
         let novo_salario_final
        
         if(valordehora_final>0){
            
            this.desconto = (this.#salario*0.09)
        novo_salario_final = this.#salario +valordehora - this.desconto
        console.log(`Seu salário final : ${novo_salario_final}`) 


        }else{


            this.desconto=(this.#salario*0.075)
             novo_salario_final = this.#salario +valordehora - this.desconto
        console.log(`Seu salário final : ${novo_salario_final}`) 

            
        }

     

    
  }

  gerarContracheque(){
    
    console.log(`Salario Base: ${this.#salario}, | Desconto : ${this.desconto}, | Hora Extra: ${this.cal_horaextraExtra()} `)

      }



} 

class gerente extends funcionario{

    setor
    quantidadeEquipe

  
     calcularBonificacao(){
      if(this.quantidadeEquipe >=10){

        bonus= this.salario*0.15

     }else{

        bonus = this.salario*0.07
     }

     }

 cal_horaextraExtra(quat_horas){

        
        let valordehora = quat_horas *20
        // console.log(`Suas Horas extras ${valordehora}`) 
        return valordehora

     

    }



  cal_salario_final(){
        
         let valordehora_final = this.cal_horaextraExtra()
         let novo_salario_final
        
         if(valordehora_final>0){
            
            this.desconto = (this.salario*0.12)
        novo_salario_final = this.salario +valordehora - this.desconto
        console.log(`Seu salário final : ${novo_salario_final}`) 


        }else{


            this.desconto=(this.salario*0.09)
             novo_salario_final = this.salario +valordehora - this.desconto
        console.log(`Seu salário final : ${novo_salario_final}`) 

            
        }

     

    
    }

  gerarContracheque(){
    
    console.log(`Salario Base: ${this.salario}, | Desconto : ${this.desconto}, |Bonificação: ${this.calcularBonificacao()}| Hora Extra: ${this.cal_horaextraExtra()} `)

}

} 
