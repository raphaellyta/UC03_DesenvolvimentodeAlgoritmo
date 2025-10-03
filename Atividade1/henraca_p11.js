import PromptSync from "prompt-sync";
const prompt = PromptSync();

// =================== CLASSE PAI ===================
class Pessoa {
  constructor(nome, cpf, data_nascimento) {
    this.nome = nome;
    this.cpf = cpf;
    this.data_nascimento = data_nascimento;
  }

  mostrar_informacoes() {
    console.log(`Nome: ${this.nome}, CPF: ${this.cpf}, Data de Nascimento: ${this.data_nascimento}`);
  }
}

// =================== FUNCIONÁRIO ===================
class Funcionario extends Pessoa {
  constructor(nome, cpf, data_nascimento, cargo, salario, matricula) {
    super(nome, cpf, data_nascimento);
    this.cargo = cargo;
    this.salario = salario;
    this.matricula = matricula;
  }

  calculo_horaExtra(horas) {
    let valorExtra = horas * 15;
    this.salario += valorExtra;
    console.log(`Horas extras adicionadas! Novo salário: R$ ${this.salario.toFixed(2)}`);
  }
}

// =================== GERENTE ===================
class Gerente extends Funcionario {
  constructor(nome, cpf, data_nascimento, cargo, salario, matricula, setor, quantidadeEquipe) {
    super(nome, cpf, data_nascimento, cargo, salario, matricula);
    this.setor = setor;
    this.quantidadeEquipe = quantidadeEquipe;
  }

  calculoBonificacao() {
    let bonus = this.quantidadeEquipe >= 10 ? 0.15 : 0.07;
    let salarioFinal = this.salario + (this.salario * bonus);
    console.log(`Salário com bonificação: R$ ${salarioFinal.toFixed(2)}`);
  }
}

// =================== DIRETOR ===================
class Diretor extends Funcionario {
  constructor(nome, cpf, data_nascimento, cargo, salario, matricula, participacaoLucros, departamento, tempoDirecao) {
    super(nome, cpf, data_nascimento, cargo, salario, matricula);
    this.participacaoLucros = participacaoLucros;
    this.departamento = departamento;
    this.tempoDirecao = tempoDirecao;
  }

  calcularGratificacao() {
    let bonus = 0.15; // caso não tenha participação nos lucros
    if (this.participacaoLucros) {
      if (this.tempoDirecao > 5) bonus = 0.30;
      else if (this.tempoDirecao >= 2) bonus = 0.25;
      else bonus = 0.20;
    }
    let salarioFinal = this.salario + (this.salario * bonus);
    console.log(`Gratificação aplicada! Salário final: R$ ${salarioFinal.toFixed(2)}`);
  }
}

// =================== DONO ===================
class Dono extends Pessoa {
  constructor(nome, cpf, data_nascimento, patrimonio, participacaoAcionaria) {
    super(nome, cpf, data_nascimento);
    this.patrimonio = patrimonio;
    this.participacaoAcionaria = participacaoAcionaria;
  }

  investir(valor) {
    this.patrimonio += valor;
    console.log(`Investimento realizado! Patrimônio atual: R$ ${this.patrimonio.toFixed(2)}`);
  }

  retirarLucros(valor) {
    if (valor <= this.patrimonio) {
      this.patrimonio -= valor;
      console.log(`Retirada de R$ ${valor.toFixed(2)} realizada. Patrimônio atual: R$ ${this.patrimonio.toFixed(2)}`);
    } else {
      console.log("Não há patrimônio suficiente para retirar esse valor.");
    }
  }
}

// =================== TESTE INTERATIVO ===================
console.log("=== CADASTRO DE PESSOAS NA EMPRESA ===");
console.log("1 - Funcionário\n2 - Gerente\n3 - Diretor\n4 - Dono");

let opcao = parseInt(prompt("Escolha o tipo de pessoa que deseja cadastrar: "));

if (opcao === 1) {
  let funcionario = new Funcionario("Ana", "12345678900", "01/01/1990", "Atendente", 2000, "F001");
  funcionario.mostrar_informacoes();
  funcionario.calculo_horaExtra(10);

} else if (opcao === 2) {
  let gerente = new Gerente("Paulo", "98765432100", "05/05/1985", "Gerente de Vendas", 5000, "G001", "Vendas", 12);
  gerente.mostrar_informacoes();
  gerente.calculoBonificacao();

} else if (opcao === 3) {
  let diretor = new Diretor("Marcos", "55555555555", "10/10/1970", "Diretor Financeiro", 10000, "D001", true, "Financeiro", 6);
  diretor.mostrar_informacoes();
  diretor.calcularGratificacao();

} else if (opcao === 4) {
  let dono = new Dono("Clara", "44444444444", "20/03/1960", 1000000, 40);
  dono.mostrar_informacoes();
  dono.investir(50000);
  dono.retirarLucros(200000);

} else {
  console.log("Opção inválida!");
}
