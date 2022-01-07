//Para mostrar, utilizaremos uma função de soma simples:
function sum(a,b){
    return a + b;
}

console.log(sum(7,2))


//Agora, digamos que queremos passar uma quantidade ilimitada de argumentos e que o valor deles seja somado. Antes do ES6, isso era feito da seguinte maneira:
function sum(){
    var valor = 0;

    for(i=0; i < arguments.length; i++){
        valor += arguments[i]
    }//Arguments é uma variável especial do JavaScript, onde há todos os argumentos passados para a função.

    return valor;
}

console.log(sum(7, 2, 8, 6, 2, 9))
//Porém, esse método é muito verboso.


//Com o ES6, houve a implementação de um novo operador que facilita esse processo, chamado rest operator, representado por '...' na lista de argumentos, junto com o nome da variável:
function sum(...args){
    return args.reduce((acc,value)=> acc+ value, 0)
}//Aqui você passa uma função para fazer a iteração ou outras formas para fazer a soma.

console.log(sum(7, 2, 8, 6, 2, 9))
//O prototype de args é array, diferente de arguments que é um objeto, o que possibilita usar a manipulação de arrays.


//Algo importante, se utilizamos arrow function, a lista de arguments é inexistente:
var sum= ()=>{
    console.log(arguments)
}

console.log(sum(7, 2, 8, 6, 2, 9))//Dará um erro de referência porque arguments não foi definido.


//Então, é necessário usar o rest operator para o funcionamento da função:
var sum= (...args)=>{
    console.log(args)
}

console.log(sum(7, 2, 8, 6, 2, 9))

//Outra coisa interessante é que podemos pegar argumentos restantes, onde separamos os primeiros valores em argumentos separados, e o restante é colocado em um array rest:
var sum= (a, b, ...args)=>{
    console.log(a, b, args)
}

console.log(sum(7, 2, 8, 6, 2, 9))