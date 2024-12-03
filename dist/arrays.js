"use strict";

var socialMedias = ['facebook', 'instagram', 'twitter'];
for (var i = 0; i < socialMedias.length; ++i) {
  console.log("Eu tenho perfil na rede social: ".concat(socialMedias[i]));
}
socialMedias.forEach(function (item, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(item));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
  return itemAtual;
});
console.log(alunos2);
var paula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula';
});
console.log(paula);
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
var todosAlunos = alunos2.every(function (item) {
  return item.curso == 'Frontend';
});
console.log(alunos2);
console.log(todosAlunos);
var existeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeBackend);
function filtraAlunosBackend(aluno) {
  return aluno.curso === 'Backend';
}
var alunosBackend = alunos2.filter(filtraAlunosBackend);
console.log(alunosBackend);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var nomesAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual.nome;
  return acumulador;
}, '');
console.log(nomesAlunos);