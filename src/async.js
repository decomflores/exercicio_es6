function funcaoPesada() {
    let exec = 0;
    for (let i = 0; i < 1000000000; i++){
        exec++;
    }

    return exec;
}

const funcPromise = new Promise((resolve, reject) => {
    try {
        let exec = 0;
        for (let i = 0; i < 1000000000; i++){
            exec++;
        }
        resolve(exec);
    } catch (error) {
        reject('Deu erro na iteração')
    }
})

const promiseParam = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
    })
}

async function execMain() {
    console.log("inicio")
    // await funcPromise
    //     .then((result) => {
    //         console.log(`Resultado: ${result}`);
    //     })
    //     .catch((error) => {
    //         console.error(`Erro: ${error}`);
    //     });
    promiseParam('asd@gmail.com', 123456).then(resultado => {
        console.log(resultado);
    })

    try {
        const resultado = await funcaoPesada();
        console.log(resultado)
    } catch(e) {
        console.log(e)
    }
    console.log('fim')
}

execMain()

