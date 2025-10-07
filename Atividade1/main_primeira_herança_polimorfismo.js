import promptSync from 'prompt-sync'
const prompt = promptSync()

import { Pessoa, Funcionario , Gerente, Diretor, Dono} from './primeiro_herença_class.js' 

let nome,cpf,datanasc
let cargo, salario,matricula
let participacaoLucro, departamento, tempoDirecao
let setor, quantidadeEquipe
let patrimonio, participacaoAcionaria




console.log("=== CADASTRO DE PESSOAS NA EMPRESA ===")
console.log("1 - Funcionário\n2 - Gerente\n3 - Diretor\n4 - Dono")

let opcao = parseInt(prompt("Escolha o tipo de pessoa que deseja cadastrar: "))



// ================= PESSOA =================
if (opcao === 1) {

 nome = prompt(`Digite o nome: `)
 cpf = prompt(`Digite o CPF : `)
 datanasc = prompt(`Digite a sua Data de Nascimento: `)
 

 let f = new Funcionario(nome,cpf,datanasc)
  f.mostrar_informacoes()
  f.cal_salario_final()



// ================= GERENTE =================
} else if (opcao === 2) {

 nome = prompt(`Digite o nome: `)
 cpf = prompt(`Digite o CPF : `)
 datanasc = prompt(`Digite a sua Data de Nascimento: `)
 cargo =prompt(`Informe qual é o seu Cargo: `)
 salario = prompt(`Informe o valor do seu Salário: `)
 matricula = prompt(`Digite sua Matricula: `)
 setor = prompt(`Digite o setor que trabalha: `)
 quantidadeEquipe = prompt(`Digite a quantidade de pessoas que estão na sua equipe: `)

  let g = new Gerente(nome,cpf,datanasc,cargo,salario,matricula,setor,quantidadeEquipe)
  g.mostrar_informacoes()
  g.cal_salario_final()


  
  // ================= DIRETOR =================

} else if (opcao === 3) {

    nome = prompt(`Digite o nome: `)
 cpf = prompt(`Digite o CPF : `)
 datanasc = prompt(`Digite a sua Data de Nascimento: `)
 cargo =prompt(`Informe qual é o seu Cargo: `)
 salario = prompt(`Informe o valor do seu Salário: `)
 matricula = prompt(`Digite sua Matricula: `)
 participacaoLucro = prompt(`Digite o Lucro de Participação: `)
 departamento = prompt(`Qual o departamento que você trabalha? `)
 tempoDirecao= prompt(`Quanto tempo de Direção você tem? `)

  let d = new Diretor( nome,cpf,datanasc,cargo, salario,matricula,participacaoLucro, departamento, tempoDirecao)
   
  d.mostrar_informacoes()
  d.cal_salario_final(4)





} else if (opcao === 4) {

nome = prompt(`Digite o nome: `)
 cpf = prompt(`Digite o CPF : `)
 datanasc = prompt(`Digite a sua Data de Nascimento: `)
 patrimonio = prompt(`Informe o valor do seu patrimonio: `)
 participacaoAcionaria = prompt(`Qual o valor de Participação Acionaria que você tem? `)
  let dono = new Dono(nome, cpf, datanasc, patrimonio, participacaoAcionaria);
  dono.mostrar_informacoes()
  dono.investir()
  dono.retirarLucros()
} else {
  console.log("Opção inválida!")
}