// const pessoa = {
//     nome: "André",
//     idade: 31,
//     saudacao() {
//         console.log(`Olá, meu nome é ${this.nome}`);
//     }
// };

// pessoa.saudacao(); // Olá, meu nome é André

// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }

//     saudacao() {
//         console.log(`Olá, meu nome é ${this.nome}`);
//     }
// }

// const pessoa1 = new Pessoa("André", 31);
// const pessoa2 = new Pessoa('Joao', 28);
// pessoa2.saudacao();
// pessoa1.saudacao(); // Olá, meu nome é André

// herança
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} faz um som`);
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome); // Chama o construtor da classe pai (Animal)
        this.raca = raca;
    }

    falar() {
        console.log(`${this.nome} latindo!`);
    }
}

// const cachorro = new Cachorro("Rex", "Labrador");
// cachorro.falar(); // Rex latindo!
// fim herança

// encapsulamento
class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        let velocidade = 0; // propriedade privada
        
        this.acelerar = function() {
            velocidade += 10;
            console.log(`Acelerando: ${velocidade} km/h`);
        }

        this.getVelocidade = function() {
            return velocidade;
        }
    }
}

const meuCarro = new Carro("Fiat", "Uno");
meuCarro.acelerar(); // Acelerando: 10 km/h
console.log(meuCarro.getVelocidade()); // 10
// fim encapsulamento

// polimorfismo
class Animal {
    falar() {
        console.log("O animal faz um som.");
    }
}

class Gato extends Animal {
    falar() {
        console.log("O gato mia.");
    }
}

class Cachorro extends Animal {
    falar() {
        console.log("O cachorro late.");
    }
}

const gato = new Gato();
const cachorro = new Cachorro();

gato.falar(); // O gato mia.
cachorro.falar(); // O cachorro late.
// fim polimorfismo