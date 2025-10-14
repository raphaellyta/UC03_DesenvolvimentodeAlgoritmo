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
    this.ocupado = false // vai controlar se vai estar disponivel ou nao 

}

}

export class reserva{
    quarto
    data_de_reserva
    cliente

    constructor(quarto,data_de_reserva,cliente){
        this.quarto= quarto
        this.data_de_reserva =  new Date(data_de_reserva) //  cria um objeto de data do JavaSc  usando o valor passado (por exemplo "2025-10-20" ou "20/10/2025").Isso transforma o texto em uma data real, que o JS entende e pode comparar, somar, ou format
        this.cliente = cliente
    }
}

export class hotel{

    nome_hotel
    quartos 
    reservas 

    constructor(nome_hotel,quartos,reservas){
        this.nome_hotel = nome_hotel
        this.quartos = []
        this.reservas = []
    }


    adcionar_quato(numero , tipo_quarto){

        let novoQuarto = new quarto(numero,tipo_quarto)
        this.quartos.push(novoQuarto)
        console.log(` Quarto ${numero} (${tipoQuarto}) adicionado com sucesso!`)

    }


    reserva_quarto(numero,quarto, data_de_reserva, cliente){

 let quarto = this.quartos.find(q=>q.numero === numero) //etorna o primeiro elemento que satisfaz a condição ou undefined se não achar.



   if (!quarto) {
    console.log(" Quarto não encontrado!");
    return;
  }

  if (quarto.ocupado) {
    console.log(" Quarto já está ocupado!");
    return;
  }

  let hoje = new Date();
  let dataReserva = new Date(data);

  if (dataReserva < hoje) {
    console.log("⚠️ Data inválida (passada).");
    return;
  }

  // cria a reserva e guarda no array de reservas
  let reserva = new Reserva(quarto, dataReserva, cliente);
  this.reservas.push(reserva);   // **push no array this.reservas**
  quarto.ocupado = true;         // marca o quarto como ocupado
  console.log(" Reserva realizada com sucesso!");
}

   }






   lista_quatos_disponivel(){
    
   }

   lista_reservas(){

   }

   informacoes_reservas(){
    
   }

   cancelar_reserva(numero, data, cliente){

      // encontra uma reserva que combine quarto, data e cliente
  let dataObj = new Date(data);
  let idx = this.reservas.findIndex(r => 
    r.quarto.numero === numero &&
    r.dataReserva.getTime() === dataObj.getTime() &&
    r.cliente.cpf === cliente.cpf
  );

  if (idx === -1) {
    console.log("Reserva não encontrada.");
    return;
  }

  let reservaRemovida = this.reservas.splice(idx, 1)[0]; // remove do array reservas
  reservaRemovida.quarto.ocupado = false;                 // marca quarto como disponível
  console.log("Reserva cancelada com sucesso.");
   }