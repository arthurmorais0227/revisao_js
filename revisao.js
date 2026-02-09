const pessoa = {
    nome: "Arthur",
    idade: 17,
    falar: function() {
        console.log("Meu nome é " + this.nome + " e tenho " + this.idade + " anos!")
    }
}

pessoa.falar();

const pessoa_2 = {
    nome: "Arthur",
    idade: 17,
    sexo: "Masculino",
    apresentar: function() {
        setTimeout(() => {
            console.log("Olá, meu nome é " + this.nome + ". Tenho " + this.idade + " anos e sou do gênero " + this.sexo + "!");
        }, 1000);
    }
};

pessoa_2.apresentar();

const pessoa_3 = {
    nome: "Arthur",
    idade: 17,
    dizer() {
        console.log("Meu nome é " + this.nome + " e tenho " + this.idade + " anos!");
    }
};

pessoa_3.dizer();