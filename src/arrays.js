const socialMedias = ['facebook', 'instagram', 'twitter'];

for (let i = 0; i < socialMedias.length; ++i) {
    console.log(`Eu tenho perfil na rede social: ${socialMedias[i]}`)
}

socialMedias.forEach(function(item, indice){
    console.log(`#${indice} Eu tenho perfil na rede social: ${item}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        curso: 'Frontend',
    }

    return itemAtual;
})

console.log(alunos2);

const paula = alunos2.findIndex(function(item){
    return item.nome == 'Paula'
})

console.log(paula)

alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

const todosAlunos = alunos2.every(function(item){
    return item.curso == 'Frontend';
})

console.log(alunos2);

console.log(todosAlunos)


const existeBackend = alunos2.some(function(item){
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeBackend)

function filtraAlunosBackend(aluno){
    return aluno.curso === 'Backend';
}

const alunosBackend = alunos2.filter(filtraAlunosBackend)

console.log(alunosBackend)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma)

const nomesAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual.nome;
    return acumulador;
}, '')

console.log(nomesAlunos)