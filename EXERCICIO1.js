class Animal {
    constructor() {
      this.idade = 0;
    }
  
    comer() {
      console.log("comendo");
    }
  
    nascer() {
      console.log("nasceu");
    }
  
    morrer() {
      console.log("morreu");
    }
  }
  
  class Passaro extends Animal {
    voar() {
      console.log("voando");
    }
  }
  
  class Mamifero extends Animal {
    constructor() {
      super();
      this.glandululamamaria = true;
    }
  }
  
  class BemTeVi extends Passaro {
    assoviar() {
      console.log("assoviando");
    }
  }
  
  class Papagaio extends Passaro {
    falar() {
      console.log("falando");
    }
  }
  
  class Cachorro extends Mamifero {
    latir() {
      console.log("auau");
    }
  }
  
  class Vaca extends Mamifero {
    mugir() {
      console.log("muuu");
    }
  }
  
  // Exemplo de uso das classes
  const bemTeVi = new BemTeVi();
  bemTeVi.nascer();
  bemTeVi.comer();
  bemTeVi.voar();
  bemTeVi.assoviar();
  bemTeVi.morrer();
