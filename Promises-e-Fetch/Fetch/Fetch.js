//Para fazer requisições no JS, antigamente era usada uma api do browser chamada "XML HTTP Request". Porém, para a sua utilização, era necessário usar callbacks, funcionalidades difíceis de se lidar.
//Assim, foi produzida uma nova api com o mesmo objetivo da anterior, mas trabalhando com promises. Pra isso, fazemos o seguinte:
//Obs:São apenas exemplos não executáveis

/*fetch('./data.json').then(responseStream => {
    console.log(responseStream)
})*/ //Colocamos a requisição e um then para a promise ser resolvida.


//Se quisermos os dados, processamos o stream:

/*
fetch('./data.json').then(responseStream => {
    return responseStream.json().then (data =>{
        console.log(data);
    }); //Assim, os dados são processados.
});
/*

//Porém, basta retornar uma promise no then para retornar os dados também:

/*
fetch('./data.json').then(responseStream => {
    return responseStream.json()
}).then (data =>{
    console.log(data);
})
*/

//Se houver um erro de rede, basta acrescentar o catch que ele será tratado:

/*
fetch('./data.json')
    .then(responseStream => {
        responseStream.json()
    })
    .then (data =>{
        console.log(data);
    })
    .catch(err =>{
        console.log ('Erro: ' + err)
    }) //Se não houver um erro de rede, o catch não será executado. Caso ocorra outro erro,não será executado.

*/


//Podemos analisar o status da operação usando o if com o responseStream:

/*
fetch('./data.json')
    .then(responseStream => {
        console.log(responseStream)
        if(responseStream === 200){
           return responseStream.json()
        } else{
            throw new Error('Request error')
        }
    })
    .then (data =>{
        console.log(data);
    })
    .catch(err =>{
        console.log ('Erro: ' + err)
    }) 
*/

//Se quisermos fazer outro método, o fetch permite outro parâmetro para a realização de outros comandos:

/*
fetch('./data.json', {
    method: "post"
})
    .then(responseStream => {
        console.log(responseStream)
        if(responseStream === 200){
           return responseStream.json()
        } else{
            throw new Error('Request error')
        }
    })
    .then (data =>{
        console.log(data);
    })
    .catch(err =>{
        console.log ('Erro: ' + err)
    }) 
*/