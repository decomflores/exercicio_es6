const minhaFuncao = () => 'diz oi';

const retornaUmCarro = () => ({
    modelo: 'Ka',
    fabricante: 'ford'
})

console.log(minhaFuncao())

console.log(retornaUmCarro())

const carro = {
    velocidadeAtual: 40,
    acelerar: function(){
        this.velocidadeAtual = this.velocidadeAtual += 10;
    },
    frear: function(){
        this.velocidadeAtual = this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
console.log(carro.velocidadeAtual)
carro.frear();
console.log(carro.velocidadeAtual)