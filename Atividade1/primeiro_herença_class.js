import PromptSync from "prompt-sync";
const prompt = PromptSync();

// ================= CLASSE PESSOA =================
export class Pessoa {
  #cpf
  constructor(nome, cpf, datanasc) {
    this.nome = nome
    this.#cpf = cpf
    this.datanasc = datanasc
  }

  get cpf() {
    return this.#cpf
  }

  set cpf(novo_cpf) {
    this.#cpf = novo_cpf
  }

  mostrar_informacoes() {
    console.log(`Nome: ${this.nome}, CPF: ${this.#cpf}, Data de Nascimento: ${this.datanasc}`)
  }
}

// ================= FUNCIONARIO =================
export class Funcionario extends Pessoa {
  #matricula
  #salario
  desconto = 0

  constructor(nome, cpf, datanasc, cargo, salario, matricula) { 
   
    super(nome, cpf, datanasc)
    this.cargo = cargo
    this.#salario = salario
    this.#matricula = matricula
  }

  get salario() {
    return this.#salario
  }

  set salario(novo_salario) {
    this.#salario = novo_salario
  }

  get matricula() {
    return this.#matricula
  }

  set matricula(nova_matricula) {
    this.#matricula = nova_matricula
  }

  mostrar_informacoes() {
    super.mostrar_informacoes()
    console.log(`Cargo: ${this.cargo}, Salário: ${this.#salario}, Matrícula: ${this.#matricula}`)
  }

  cal_horaextraExtra(quat_horas) {
    return quat_horas * 15
  }

  cal_salario_final(quat_horas) {
    let valordehora_final = this.cal_horaextraExtra(quat_horas)
    let novo_salario_final

    if (valordehora_final > 0) {
      this.desconto = this.#salario * 0.09
    } else {
      this.desconto = this.#salario * 0.075
    }

    novo_salario_final = this.#salario + valordehora_final - this.desconto
    console.log(`Salário final: R$ ${novo_salario_final}`)
  }

  gerarContracheque(quat_horas) {
    console.log(`Salário Base: ${this.#salario}, Horas Extras: ${quat_horas}, Desconto: ${this.desconto}`);
  }
}

// ================= GERENTE =================
export class Gerente extends Funcionario {
  constructor(nome, cpf, datanasc, cargo, salario, matricula, setor, quantidadeEquipe) {
    super(nome, cpf, datanasc, cargo, salario, matricula)
    this.setor = setor
    this.quantidadeEquipe = quantidadeEquipe
  }

  mostrar_informacoes() {
    super.mostrar_informacoes();
    console.log(`Setor: ${this.setor}, Equipe: ${this.quantidadeEquipe} pessoas`)
  }

  cal_horaextraExtra(quat_horas) {
    return quat_horas * 20
  }

  calcularBonificacao() {
    return this.quantidadeEquipe >= 10 ? this.salario * 0.15 : this.salario * 0.07
  }

  cal_salario_final(quat_horas) {
    let valordehora_final = this.cal_horaextraExtra(quat_horas)
    let bonus = this.calcularBonificacao()
    let novo_salario_final

    if (valordehora_final > 0) {
      this.desconto = this.salario * 0.12
    } else {
      this.desconto = this.salario * 0.09
    }

    novo_salario_final = this.salario + valordehora_final + bonus - this.desconto
    console.log(`Salário final: R$ ${novo_salario_final}`)
  }
}

// ================= DIRETOR =================
 export   class Diretor extends Funcionario {
  constructor(nome, cpf, datanasc, cargo, salario, matricula, participacaoLucro, departamento, tempoDirecao) {
    super(nome, cpf, datanasc, cargo, salario, matricula)
    this.participacaoLucro = participacaoLucro
    this.departamento = departamento
    this.tempoDirecao = tempoDirecao
  }

  mostrar_informacoes() {
    super.mostrar_informacoes()
    console.log(`Departamento: ${this.departamento}, Tempo de Direção: ${this.tempoDirecao} anos`);
  }

  cal_horaextraExtra(quat_horas) {
    return quat_horas * 25
  }

  calcularGratificacao() {
    if (!this.participacaoLucro) return this.salario * 0.15
    if (this.tempoDirecao > 5) return this.salario * 0.3
    if (this.tempoDirecao >= 2) return this.salario * 0.25
    return this.salario * 0.2
  }

  cal_salario_final(quat_horas) {
    let valordehora_final = this.cal_horaextraExtra(quat_horas);
    let gratificacao = this.calcularGratificacao();
    let novo_salario_final;

    if (valordehora_final > 0) {
      this.desconto = this.salario * 0.14
    } else {
      this.desconto = this.salario * 0.12
    }

    novo_salario_final = this.salario + valordehora_final + gratificacao - this.desconto
    console.log(`Salário final: R$ ${novo_salario_final}`)
  }
}

// ================= DONO =================
 export class Dono extends Pessoa {
  constructor(nome, cpf, datanasc, patrimonio, participacaoAcionaria) {
    super(nome, cpf, datanasc)
    this.patrimonio = patrimonio
    this.participacaoAcionaria = participacaoAcionaria
  }

  mostrar_informacoes() {
    super.mostrar_informacoes()
    console.log(`Patrimônio: R$ ${this.patrimonio}, Participação: ${this.participacaoAcionaria}%`)
  }

  investir(valor) {
    this.patrimonio += valor
    console.log(`Investimento realizado! Patrimônio atual: R$ ${this.patrimonio}`)
  }

  retirarLucros(valor) {
    if (valor <= this.patrimonio) {
      this.patrimonio -= valor
      console.log(`Lucro retirado: R$ ${valor}. Patrimônio atual: R$ ${this.patrimonio}`)
    } else {
      console.log("Saldo insuficiente no patrimônio!")
    }
  }
}


