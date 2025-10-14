 import PromptSync from "prompt-sync"
const prompt = PromptSync()



export class hotel_erro extends Error{
    constructor(message){
        super(message)
    }

}


export class cliente{
#cpf
nome_cliente
#contato

constructor(cpf,nome_cliente, contato){

this.#cpf = cpf
this.nome_cliente = nome_cliente
this.#contato= cadastro
}

get cpf(){
    return this.#cpf
}

get contato(){
     return this.#contato
 }

 set cpf (novo_cpf){
    this.#cpf = novo_cpf

 }
 
set contato (novo_contato){
    this.#contato = novo_contato
}


}

export class quarto{
numero
tipo_quarto


constructor(numero,tipo_quarto){
    this.numero = numero
    this.tipo_quarto = tipo_quarto

}

}

export class reserva{
    quarto
    data_de_reserva
    cliente

    constructor(quarto,data_de_reserva,cliente){
        this.quarto= quarto
        this.data_de_reserva = data_de_reserva
        this.cliente = cliente
    }
}

export class hotel{

    nome_hotel
    quartos 
    reservas 

    constructor(nome_hotel,quartos,reservas){
        this.nome_hotel = nome_hotel
        this.quartos = quartos
        this.reservas = reservas

    }


    adcionar_quato(numero){

    }

    reserva_quarto(quarto, data_de_reserva, cliente){

   }


   lista_quatos_disponivel(){
    
   }

   lista_reservas(){

   }

   informacoes_reservas(){
    
   }

}