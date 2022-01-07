//Async/Await é uma forma mais simples de usar promises:
const funcaoSimples = async () => {
    return 12345
}; //Ao usar apenas async, ele já transforma em promise.

console.log(funcaoSimples())


//Assim, podemos também pedir o retorno com o ".then":
const funcaoSimples = async () => {
    return 12345
}; 

funcaoSimples().then(data => {
    console.log(data);
})


//Se houver um erro, também, podemos tratá-lo com ".catch":
const funcaoSimples = async () => {
    throw new Error('Oh no!');
    return 12345
}; 

funcaoSimples().then(data => {
    console.log(data);
}).catch(err => {
    console.log('Erro:' + err)
})


//Porém, async não é muito utilizado sozinho, normalmente é acompanhado de "await" que espera a resolução de outras promises:
const asyncTimer = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(12345);
    }, 1000)
})

const funcaoSimples = async () => {
    const data = await asyncTimer()
    return data
}; 

funcaoSimples().then(data => {
    console.log(data);
}).catch(err => {
    console.log('Erro:' + err)
}) //Assim, é possível ver uma forma de lidar com código assíncrono de forma sequencial


//Se quisermos, também podemos usar o fetch junto ao async/await:
const asyncTimer = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(12345);
    }, 1000)
})

const funcaoSimples = async () => {
    const data = await asyncTimer();
    console.log(data);
    const fetch = await fetch('./data.json')
    .then(responseStream => responseStream.json()); //Obs: o fetch nesse caso causará um erro, pois esse código específico não é executável.


    return fetch
}; //Processamento assíncrono sequencial.

funcaoSimples().then(data => {
    console.log(data);
}).catch(err => {
    console.log('Erro:' + err)
})


//Também podemos usar o "Promise.all" para execução simultânea:
const asyncTimer = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(12345);
    }, 1000)
})

const funcaoSimples = async () => {
    const data = await Promise.all ([asyncTimer(), fetch('./data.json') //Aqui o fetch interromperá a execução.
    .then(responseStream => responseStream.json())])
    console.log(data);

    return data
} 

funcaoSimples().then(data => {
    console.log(data);
}).catch(err => {
    console.log('Erro:' + err)
})