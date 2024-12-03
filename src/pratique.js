class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const alunos = [
    new Aluno("Ana", 8.5),
    new Aluno("Carlos", 5.0),
    new Aluno("Maria", 9.2),
    new Aluno("João", 4.8),
    new Aluno("Fernanda", 10.0)
];

console.log('Lista completa de alunos com suas respectivas notas',alunos);

function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6)
}

const aprovados = alunosAprovados(alunos);
console.log('Lista de alunos aprovados com média maior que 6.', aprovados)