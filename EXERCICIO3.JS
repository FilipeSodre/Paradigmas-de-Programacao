class MinhaData {
  getDia() {}
  getMes() {}
  getAno() {}
  setDia(dia) {}
  setMes(mes) {}
  setAno(ano) {}
  mostrarData() {}
}

class Data extends MinhaData {
  constructor() {
    super();
    this.dia = 0;
    this.mes = 0;
    this.ano = 0;
  }

  getDia() {
    return this.dia;
  }

  getMes() {
    return this.mes;
  }

  getAno() {
    return this.ano;
  }

  setDia(dia) {
    if (dia >= 1 && dia <= 31) {
      this.dia = dia;
    } else {
      console.log("Dia inválido");
    }
  }

  setMes(mes) {
    if (mes >= 1 && mes <= 12) {
      this.mes = mes;
    } else {
      console.log("Mês inválido");
    }
  }

  setAno(ano) {
    this.ano = ano;
  }

  mostrarData() {
    console.log(`Data: ${this.dia}/${this.mes}/${this.ano}`);
  }
}

class DataDigitada {
  static main() {
    const data = new Data();
    data.setDia(30);
    data.setMes(5);
    data.setAno(2023);
    data.mostrarData();
  }
}

DataDigitada.main();
