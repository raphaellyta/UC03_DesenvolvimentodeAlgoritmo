function main() {
  console.log(" Bem-vindo ao Sistema de Reservas do Hotel Lua Cheia ")
  const hotelPrincipal = new hotel("Hotel Lua Cheia");

  while (true) {
    console.log(`
==============================
1  Adicionar quarto
2 Fazer reserva
3 Cancelar reserva
4 Listar quartos disponíveis
5 Listar todas as reservas
6 Consultar informações de uma reserva
0  Sair
==============================`)
    let opcao = prompt("Escolha uma opção: ")

    switch (opcao) {
      case "1":
        hotelPrincipal.adicionar_quarto()
        break
      case "2":
        hotelPrincipal.reservar_quarto()
        break;
      case "3":
        hotelPrincipal.cancelar_reserva()
        break
      case "4":
        hotelPrincipal.listar_quartos_disponiveis()
        break
      case "5":
        hotelPrincipal.listar_reservas()
        break
      case "6":
        hotelPrincipal.informacoes_reserva()
        break
      case "0":
        console.log(" Saindo do sistema... Até logo!")
        return
      default:
        console.log(" Opção inválida, tente novamente.")
    }
  }
}
