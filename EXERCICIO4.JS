class Pessoa {
    constructor(nome = "indefinido", idade = 0) {
      this.nome = nome;
      this.idade = idade;
    }
  
    getNome() {
      return this.nome;
    }
  
    setNome(nome) {
      this.nome = nome;
    }
  
    getIdade() {
      return this.idade;
    }
  
    setIdade(idade) {
      this.idade = idade;
    }
  }
  
  const Filipe = new Pessoa("Filipe", 19);
  console.log("Nome:", Filipe.getNome());
  console.log("Idade:", Filipe.getIdade());
  