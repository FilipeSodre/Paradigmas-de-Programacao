class Pessoa {
    constructor(nome = "indefinido") {
      this.nome = nome;
    }
  
    getNome() {
      return this.nome;
    }
  
    setNome(nome) {
      this.nome = nome;
    }
  }
  
  class MinhaData {
    constructor(dia, mes, ano) {
      this.dia = dia;
      this.mes = mes;
      this.ano = ano;
    }
  
    getDia() {
      return this.dia;
    }
  
    setDia(dia) {
      this.dia = dia;
    }
  
    getMes() {
      return this.mes;
    }
  
    setMes(mes) {
      this.mes = mes;
    }
  
    getAno() {
      return this.ano;
    }
  
    setAno(ano) {
      this.ano = ano;
    }
  }
  
  class Amigo extends Pessoa {
    constructor() {
      super();
      this.dataNascimento = new MinhaData(0, 0, 0);
    }
  
    getDataNascimento() {
      return this.dataNascimento;
    }
  
    setDataNascimento(dataNascimento) {
      this.dataNascimento = dataNascimento;
    }
  }
  
  let João = new Amigo();
  João.setNome("João");
  
  let dataNascimento = new MinhaData(21, 06, 2004);
  João.setDataNascimento(dataNascimento);
  
  console.log("Nome: " + João.getNome());
  console.log("Data de Nascimento: " + João.getDataNascimento().getDia() + "/" + João.getDataNascimento().getMes() + "/" + João.getDataNascimento().getAno());
  