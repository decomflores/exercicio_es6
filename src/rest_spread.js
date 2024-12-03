// function somar() {
//     let soma = 0;

//     for (let i = 0; i < arguments.length; i++){
//         soma += arguments[i];
//     }

//     return soma;
// }

// console.log(somar(10, 20, 30))


// Rest
function somarRest(...numeros) {
    const soma = numeros.reduce((total, numAtual) => {
        total += numAtual;
        return total;
    }, 0)

    return soma;
}

console.log(somarRest(10, 20, 30, 40, 50));

// Spread
const num = [1, 2, 3, 4, 5];

console.log(...num);

const timesSp = ['santos', 'palmeiras', 'bragantino', 'sao paulo'];
const timesRio = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

const timesTodos = [...timesSp, ...timesRio];

const [item1, item2, item3, ...outrosTimes] = timesTodos;

console.log(timesTodos)
console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)

const carroJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroAna = {
    ...carroJulia,
    motor: 1.8
}

console.log(`O carro da Julia é ${carroJulia.modelo}, da marca ${carroJulia.marca} e com motor de ${carroJulia.motor}`)
console.log(`O carro da Ana é ${carroAna.modelo}, da marca ${carroAna.marca} e com motor de ${carroAna.motor}`)

// desestruturação

const { motor: motorAna } = carroAna;
const { motor: motorJulia } = carroJulia;

console.log(motorJulia)
console.log(motorAna)
