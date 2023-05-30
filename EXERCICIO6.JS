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
  
  class Conhecido extends Pessoa {
    constructor() {
      super();
      this.email = "indefinido";
    }
  
    getEmail() {
      return this.email;
    }
  
    setEmail(email) {
      this.email = email;
    }
  }
  
  let conhecido = new Conhecido();
  conhecido.setNome("Filipe");
  conhecido.setEmail("filipe.202212630@unilasalle.edu.br");
  
  console.log("Nome: " + conhecido.getNome());
  console.log("Email: " + conhecido.getEmail());
  