class MeuHorario {
  constructor() {
    this.hora = 0;
    this.minuto = 0;
    this.segundo = 0;
  }

  getHora() {
    return this.hora;
  }

  getMinuto() {
    return this.minuto;
  }

  getSegundo() {
    return this.segundo;
  }

  setHora(hora) {
    this.hora = hora;
  }

  setMinuto(minuto) {
    this.minuto = minuto;
  }

  setSegundo(segundo) {
    this.segundo = segundo;
  }

  toString() {
    const horaString = (this.hora < 10) ? "0" + this.hora : String(this.hora);
    const minutoString = (this.minuto < 10) ? "0" + this.minuto : String(this.minuto);
    const segundoString = (this.segundo < 10) ? "0" + this.segundo : String(this.segundo);

    return horaString + ":" + minutoString + ":" + segundoString;
  }
}

class Horario extends MeuHorario {
  constructor(hora, minuto, segundo) {
    super();
    this.hora = hora;
    this.minuto = minuto;
    this.segundo = segundo;
  }
}

class UsaHorario {
  run() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question("Digite a quantidade de segundos: ", (segundos) => {
      let horas = Math.floor(segundos / 3600);
      segundos %= 3600;
      let minutos = Math.floor(segundos / 60);
      segundos %= 60;

      const horario = new Horario(horas, minutos, segundos);
      console.log("Tempo: " + horario.toString());

      rl.close();
    });
  }
}

const usaHorario = new UsaHorario();
usaHorario.run();
