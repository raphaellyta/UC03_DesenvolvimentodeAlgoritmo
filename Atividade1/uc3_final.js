 import PromptSync from "prompt-sync"
const prompt = PromptSync()



export class hotel_erro extends Error{
    constructor(message){
        super(message)
    }

}

// ======================= CLIENTE =======================

export class cliente{
#cpf
nome_cliente
#contato

constructor(cpf,nome_cliente, contato){

this.#cpf = cpf
this.nome_cliente = nome_cliente
this.#contato= contato
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


// ======================= QUARTO =======================

export class quarto{
numero
tipo_quarto


constructor(numero,tipo_quarto){
    this.numero = numero
    this.tipo_quarto = tipo_quarto
    this.ocupado = false // vai controlar se vai estar disponivel ou nao 

}

}

// ======================= RESERVA =======================


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


// ======================= HOTEL =======================

export class hotel{

    nome_hotel
    quartos 
    reservas 

    constructor(nome_hotel,quartos,reservas){
        this.nome_hotel = nome_hotel
        this.quartos = []
        this.reservas = []
    }




// ADICIONAR QUARTO

    adcionar_quarto(numero , tipo_quarto){

    console.log("\n=== CADASTRO DE QUARTO ===")
    let numero = parseInt(prompt("Número do quarto: "))
    let tipo_quarto = prompt("Tipo do quarto (Simples, Duplo, Suíte): ")

        let novoQuarto = new quarto(numero,tipo_quarto)
        this.quartos.push(novoQuarto)
        console.log(` Quarto ${numero} (${tipoQuarto}) adicionado com sucesso!`)

    }



    // RESERVAR QUARTO


     reservar_quarto() {
    console.log("\n=== FAZER RESERVA ===")

    let numero = parseInt(prompt("Número do quarto desejado: "))
    let quartoEscolhido = this.quartos.find(q => q.numero === numero)

    if (!quartoEscolhido) {
      console.log(" Quarto não encontrado!")
      return
    }

    if (quartoEscolhido.ocupado) {
      console.log("Quarto já está ocupado!")
      return
    }

    let nome_cliente = prompt("Nome do cliente: ")
    let cpf = prompt("CPF do cliente: ")
    let contato = prompt("Contato do cliente: ")
    let data = prompt("Data da reserva (AAAA-MM-DD): ")

    let hoje = new Date()  // comparar se a data solicitada é no passado
    let dataReserva = new Date(data) // converte a data em um objeto

    if (dataReserva < hoje) {
      console.log(" Data inválida (já passou).")
      return //Interrompe o método, pois a regra do negócio proíbe datas no passado.
    }

    let novoCliente = new cliente(cpf, nome_cliente, contato) //Cria um novo objeto cliente usando os dados que o usuário digitou. Esse objeto representa quem fez a reserva.
    let novaReserva = new reserva(quartoEscolhido, data, novoCliente) //Cria um novo objeto reserva associando ao parametros

    this.reservas.push(novaReserva) //Adiciona o objeto novaReserva ao array this.reservas do hotel. push() coloca o item no final do array. Assim o hotel passa a "conhecer" essa nova reserva.
    quartoEscolhido.ocupado = true //Marca o quarto como ocupado. Isso previne que outra reserva seja feita para o mesmo quarto sem cancelamento.

    console.log(` Reserva confirmada para ${nome_cliente} no quarto ${numero}.`)
  }


 // CANCELAR RESERVA
  cancelar_reserva() {
    console.log("\n=== CANCELAR RESERVA ===")
    let numero = parseInt(prompt("Número do quarto: "))
    let cpf = prompt("CPF do cliente: ")
    let data = prompt("Data da reserva (AAAA-MM-DD): ")

    let dataObj = new Date(data)  //Converte a data que o usuário digitou (em texto) para um objeto de data real
    let idx = this.reservas.findIndex(r =>
      r.quarto.numero === numero &&
      r.data_de_reserva.getTime() === dataObj.getTime() &&
      r.cliente.cpf === cpf  //garante que o cliente certo está cancelando

      //rocura dentro do array this.reservas a posição (índice) da reserva que combina exatamente com os dados informados.
    )

    if (idx === -1) {
      console.log("Reserva não encontrada.")
      return

      //Se não achou nenhuma reserva igual (findIndex retorna -1), mostra “Reserva não encontrada” e sai da função.
    }

    let reservaRemovida = this.reservas.splice(idx, 1)[0] //remove a reserva encontrada do array this.reservas.[0] serve pra pegar o item que foi realmente remo
    reservaRemovida.quarto.ocupado = false;

    console.log(`Reserva do quarto ${numero} cancelada com sucesso.`)
  }

   // LISTAR QUARTOS DISPONÍVEIS
  listar_quartos_disponiveis() {
    console.log("\n=== QUARTOS DISPONÍVEIS ===") //this.quartos é o array com todos os quartos do hotel
    let livres = this.quartos.filter(q => !q.ocupado) //cria um novo array apenas com os quartos que não estão ocupados

    if (livres.length === 0) {
      console.log("Nenhum quarto disponível no momento.")
    } else {
      livres.forEach(q => {
        console.log(`Quarto ${q.numero} - Tipo: ${q.tipo_quarto}`)
      })
    }
  }

  // LISTAR RESERVAS
  listar_reservas() {
    console.log("\n=== LISTA DE RESERVAS ===")
    if (this.reservas.length === 0) {
      console.log("Nenhuma reserva encontrada.");
      return;
    }

    this.reservas.forEach((r, i) => { //forEach é um método do array que executa uma função para cada item.r representa a reserva atual (um objeto).i é o índice (posição no array), começando em 0.
      console.log(
        `${i + 1}. Quarto ${r.quarto.numero} (${r.quarto.tipo_quarto}) | Cliente: ${r.cliente.nome_cliente} | Data: ${r.data_de_reserva.toLocaleDateString('pt-BR')}`
      );
    });
  }

  // INFORMAÇÕES DE UMA RESERVA ESPECÍFICA
  informacoes_reserva() {
    console.log("\n=== CONSULTAR RESERVA ===")
    let numero = parseInt(prompt("Número do quarto: "))
    let data = prompt("Data da reserva (AAAA-MM-DD): ")
    let dataObj = new Date(data)

    let reservaEncontrada = this.reservas.find(r =>
      r.quarto.numero === numero &&
      r.data_de_reserva.getTime() === dataObj.getTime()
    );

    if (!reservaEncontrada) {
      console.log(" Reserva não encontrada.");
      return;
    }

    console.log(`\n--- Detalhes da Reserva ---`);
    console.log(`Quarto: ${reservaEncontrada.quarto.numero} (${reservaEncontrada.quarto.tipo_quarto})`)
    console.log(`Cliente: ${reservaEncontrada.cliente.nome_cliente} | CPF: ${reservaEncontrada.cliente.cpf}`)
    console.log(`Data: ${reservaEncontrada.data_de_reserva.toLocaleDateString('pt-BR')}`)
  }

}




