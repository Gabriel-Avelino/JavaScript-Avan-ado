//No JS nativo, era muito comum utilizar funções de callback para executar algo após uma determinada tarefa síncrona:
function facaAlgo (callback){
    setTimeout(function () {
        //Faz algo
        callback('First data');
    }, 1000)
}

function facaOutraCoisa(callback){
    setTimeout(function(){
        //Faz outra coisa
        callback('Second data');
    }, 1000)
}

function facaTudo (){
    facaAlgo(function(data){
        var processarData= data.split('');

        facaOutraCoisa(function(data2){
            var processarData2= data2.split('');

            setTimeout(function(){
                console.log(processarData, processarData2)
            }, 1000);
        })
    });
} 

facaTudo();


//Vendo esse método, parece ter sido a melhor forma, porém digamos que algum dado não seja processado, ou então, eu termos que fazer um tratamento de dados em cada etapa:
function facaAlgo (callback){
    setTimeout(function () {
        //Faz algo
        callback('First data');
    }, 1000)
}

function facaOutraCoisa(callback){
    setTimeout(function(){
        //Faz outra coisa
        callback('Second data');
    }, 1000)
}

function facaTudo (){
    try{
        facaAlgo(function(data){
        var processarData= data.split('');
        try{facaOutraCoisa(function(data2){
            var processarData2= data2.split('');
            try {
                setTimeout(function(){
                    console.log(processarData, processarData2)
                    }, 1000);
            } catch(err){
                //Tratamento de erro
            }
            });
        } catch(err){
            //Tratamento de erro
        }
    });
    
        
    } catch (err){
        //Tratamento de erro
    }
};

facaTudo(); //Porém, esse método causa o chamado o chamado CallbackHell


//Antes do ES6, algumas bibliotecas aplicavam algo parecido com o que chamamos de 'promises', que é uma forma inteligente de lida com código assíncrono.
//Para fazer promises, usamos a seguinte estrutura:
/*
const myPromise = new Promise((resolve, reject) => {
    //Comandos
});
*/


//Uma promise tem três estados, pending(em execução), fulfilled(Terminou de executar) e reject (ocorreu um erro).
//Agora, veja a estrutura e os estados de uma promise utilizando o primeiro exemplo exemplo:
const facaAlgoPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        //Faz algo
        resolve('First data');
    }, 1000); //Se quiser, posso colocar um try/catch, porém, qualquer erro será colocado no reject.
});

const outraCoisaPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        //Faz outra coisa
        resolve('Second data');
    }, 1000)
});

console.log(facaAlgoPromise) //Pending


//Para executar o console da maneira correta, usamos o '.then':
const facaAlgoPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        //Faz algo
        resolve('First data');
    }, 1000); 
});

const outraCoisaPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        //Faz outra coisa
        resolve('Second data');
    }, 1000)
});

facaAlgoPromise.then(data => console.log(data)); //Fulfilled


//Agora, digamos que ocorra um erro  antes do setTimeOut:
const facaAlgoPromise = new Promise((resolve, reject) => {
    throw new Error ('Algo deu errado!');
    setTimeout(function () {
        //Faz algo
        resolve('First data');
    }, 1000); 
});

const outraCoisaPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        //Faz outra coisa
        resolve('Second data');
    }, 1000)
});

facaAlgoPromise.then(data => console.log(data)) //Irá impedir a execução do then e disparará um erro global. Reject.


//Para tratar um erro, usamos o '.catch' e passamos o que será realizado:
const facaAlgoPromise = new Promise((resolve, reject) => {
    throw new Error ('Algo deu errado!');
    setTimeout(function () {
        //Faz algo
        resolve('First data');
    }, 1000); 
});

const outraCoisaPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        //Faz outra coisa
        resolve('Second data');
    }, 1000)
});

facaAlgoPromise
    .then(data => console.log(data))
    .catch(error => console.log(error))


//Podemos também usar o then para pegar os dados de uma promise e passar para outra, encadeando-as:
const facaAlgoPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        //Faz algo
        resolve('First data');
    }, 1000); 
});

const outraCoisaPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        //Faz outra coisa
        resolve('Second data');
    }, 1000)
});

facaAlgoPromise
    .then(data => outraCoisaPromise)
    .then (data2 => console.log(data2))
    .catch()


//Podemos executar as duas promises em sequência também:
const facaAlgoPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        //Faz algo
        resolve('First data');
    }, 1000); 
});

const outraCoisaPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        //Faz outra coisa
        resolve('Second data');
    }, 1000)
});

facaAlgoPromise
    .then(data => {
        console.log (data); 
        return outraCoisaPromise
    })
    .then (data2 => console.log(data2))
    .catch()


//Se quisermos fazer uma função que gere essas promises, também podemos:
const facaAlgoPromise = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        //Faz algo
        resolve('First data');
    }, 1000); 
});

const outraCoisaPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        //Faz outra coisa
        resolve('Second data');
    }, 1000)
});

facaAlgoPromise ()
    .then(data => {
        console.log (data); 
        return outraCoisaPromise ();
    })
    .then (data2 => console.log(data2))
    .catch()


//Caso, um erro aconteça em qualquer uma das promises encadeadas, o erro vai ser tratado pelo único catch presente no final: 
const facaAlgoPromise = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        //Faz algo
        resolve('First data');
    }, 1000); 
});

const outraCoisaPromise = () => new Promise((resolve, reject) => {
    throw new Error ('Algo deu errado!')
    setTimeout(function(){
        //Faz outra coisa
        resolve('Second data');
    }, 1000)
});

facaAlgoPromise ()
    .then(data => {
        console.log (data); 
        return outraCoisaPromise ();
    })
    .then (data2 => console.log(data2))
    .catch(error => console.log('Ops', error)) //O primeiro terminou, mas o segundo não foi executado.


//Se o erro ocorrer na primeira promise, nenhuma das duas será executada:
const facaAlgoPromise = () => new Promise((resolve, reject) => {
    throw new Error ('Algo deu errado!')
    setTimeout(function () {
        //Faz algo
        resolve('First data');
    }, 1000); 
});

const outraCoisaPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        //Faz outra coisa
        resolve('Second data');
    }, 1000)
});

facaAlgoPromise ()
    .then(data => {
        console.log (data); 
        return outraCoisaPromise ();
    })
    .then (data2 => console.log(data2))
    .catch(error => console.log('Ops', error)) //Assim é possível reduzir e enxugar a minha escrita.


//Agora, vamos fazer igual o primeiro exemplo:
const facaAlgoPromise = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        //Faz algo
        resolve('First data');
    }, 1000); 
});

const outraCoisaPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        //Faz outra coisa
        resolve('Second data');
    }, 1000)
});

facaAlgoPromise ()
    .then(data => {
        console.log (data.split('')); 
        return outraCoisaPromise ();
    })
    .then (data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error)) //Nós temos o mesmo resultado com menos linhas e com mais facilidade de manutenção.


//Até o momento, a execução de promises era feita em sequência, também é possível fazer execução de promises em paralelo usando o método "Promise.all":
const facaAlgoPromise = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        //Faz algo
        resolve('First data');
    }, 1000); 
});

const outraCoisaPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        //Faz outra coisa
        resolve('Second data');
    }, 1000)
});

Promise.all([facaAlgoPromise(), outraCoisaPromise()]).then(data=>{
    console.log(data)
});


//Podemos também fazer um split nos resultados usando o sistema de arrays:
const facaAlgoPromise = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        //Faz algo
        resolve('First data');
    }, 1000); 
});

const outraCoisaPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        //Faz outra coisa
        resolve('Second data');
    }, 1000)
});

Promise.all([facaAlgoPromise(), outraCoisaPromise()]).then(data=>{
    console.log(data[0].split(''));
    console.log(data[1].split(''));
});


//Se eu quiser um tratamento de erro, basta usar um catch:
const facaAlgoPromise = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        //Faz algo
        resolve('First data');
    }, 1000); 
});

const outraCoisaPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        throw new Error('Algo deu errado!')
        //Faz outra coisa
        resolve('Second data');
    }, 1000)
});

Promise.all([facaAlgoPromise(), outraCoisaPromise()]).then(data=>{
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err =>{
    console.log(err);
}) //Cancela a execução das duas.


//Outra forma de lidar com múltiplas promises é com o race, onde a primeira a ser resolvida será retornada:
const facaAlgoPromise = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        //Faz algo
        resolve('First data');
    }, 1500); 
});

const outraCoisaPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        //Faz outra coisa
        resolve('Second data');
    }, 1000)
});

Promise.race([facaAlgoPromise(), outraCoisaPromise()]).then(data=>{
    console.log(data);
}) //O tratamento de erro funciona da mesma forma.