"use strict";

var minhaFuncao = function minhaFuncao() {
  return 'diz oi';
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'Ka',
    fabricante: 'ford'
  };
};
console.log(minhaFuncao());
console.log(retornaUmCarro());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual = this.velocidadeAtual += 10;
  },
  frear: function frear() {
    this.velocidadeAtual = this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
console.log(carro.velocidadeAtual);
carro.frear();
console.log(carro.velocidadeAtual);