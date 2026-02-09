// exercício 1

const calculadora = {
    valor: 0,
    adicionar: function(num) {
        this.valor += num;
    }
};

calculadora.adicionar(12);
console.log(calculadora.valor); // Deve exibir: 10

// exercício 2

const pet = {
    nome: "Rex",
    latir: function() {
        setTimeout(() => {
            console.log(this.nome + " latia: Au Au!");
        }, 1000);
    }
};

pet.latir(); 

// exercício 3

const carro = {
    marca: "Toyota",
    exibirMarca: function() {
        console.log("A marca do carro é: " + this.marca);
    }
};

carro.exibirMarca(); // Exibe: "A marca do carro é: undefined"

// exercício 4

function Relogio() {
    this.segundos = 0;

    setInterval(() => {
        this.segundos++;
        console.log("Segundos passados: " + this.segundos);
    }, 1000);
}

const meuRelogio = new Relogio();

// exercício 5

const usuario = {
    username: "dev_javascript",
    tags: ['js', 'programação', 'web'],
    listarTags () {
        this.tags.forEach(tag => {
            console.log(this.username + " marcou a tag: " + tag);
        });
    }
};

usuario.listarTags();
