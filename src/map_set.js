const map = new Map();

map.set('nome', 'André');
map.set('idade', 31);
map.set('altura', '1,90m');
map.set('sobrenome', 'Flores');

map.delete('sobrenome')
// console.log(map)

const nome = map.get('nome')
// console.log(nome)
// console.log(map)

// console.log(map.size)

// console.log(map.has('nome'))

// iteração de mapas

// para termos o retorno dos valores presentes no mapa
for (const valores of map.values()) {
    // console.log(valores)
}

// para termos o retorno das chaves presentes no mapa
for ( const chaves of map.keys()) {
    // console.log(chaves)
}

// para termos o retorno das entradas presentes no mapa
for (const entrada of map.entries()) {
    // console.log(entrada)
}

// outra forma de pegar as entradas
for (const [chave, valor] of map.entries()) {
    // console.log(`${chave}: ${valor}`)
}

const cpfs = new Set();

cpfs.add('15775793056')
cpfs.add('24926712083')
cpfs.add('67476790081')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => console.log(valor));

// transformando arrays em sets

const array = ['José', 'Maria', 'Cláudia', 'Joana', 'Paulo', 'José', 'Maria', 'Paulo']

const arraySet = new Set([...array])
const setArray = [...arraySet]

console.log(setArray) //[ 'José', 'Maria', 'Cláudia', 'Joana', 'Paulo' ]
console.log(arraySet)