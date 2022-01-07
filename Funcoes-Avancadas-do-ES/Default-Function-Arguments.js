//Ao trabalhar comn funções, era comum ocorrer cenários atípicos envolvendo os parâmetros das funções.
//Por exemplo, se fizermos uma função que faz uma operação numérica e não passarmos um dos parâmetros, isso resultará um "Not a Number (NaN)" 
function multiplicar (a,b){
    return a * b;
}

console.log(multiplicar(9)) //Isso porque caso não definirmos b, seu valor será "undefined", e isso impedirá a execução da função.


//Uma forma de resolver seria usando o operador OU (||) para passar um valor para caso o usuário omita o valor de b:
function multiplicar (a,b){
    b= b || 1;
    return a * b;
}

console.log(multiplicar(9))


//Porém, digamos que mantivéssemos o mesmo código e assim passemos o valor '0' para b:
function multiplicar (a,b){
    b= b || 1;
    return a * b;
}

console.log(multiplicar(9,0)) //Isso não dará o resultado esperado, pois '0' é transformado em 'false' pela validação lógica, pois esse valor é falso no JS.


//Para resolver isso, será preciso uma validação de tipo:
function multiplicar (a,b){
    b= typeof b === 'undefined' ? 1 : b;
    return a * b;
}

console.log(multiplicar(9, 0))


//Existem outras soluções, uma delas é utilizando 'if':
function multiplicar (a,b){
    if(b= typeof b === 'undefined') {
        b=1
    }; //Porém, ainda continua verboso, dificultando correções de bugs e implementações.

    return a * b;
}

console.log(multiplicar(9, 0))


//Com o ES6, é possível definir valores padrão sem validações, basta colocar o '=' após a declaração do parâmetro e o valor desejado.
function multiplicar (a,b= 1){
    return a * b;
} 

console.log(multiplicar(9))


//Isso funciona com todos os parâmetros:
function multiplicar (a=1,b= 1){
    return a * b;
} 

console.log(multiplicar())


//Podemos referenciar outros parâmetros também:
function multiplicar (a=1,b= a){
    return a * b;
} 

console.log(multiplicar(6))


//Porém não é possível referenciar um valor que venha antes na lista de argumentos, causando um erro:
function multiplicar (a=b,b= 1){
    return a * b;
} 

console.log(multiplicar(undefined, 5))


//Outra característica é o Lazy Evaluation, que é a capacidade de passar uma função como valor de um parâmetro(como no caso desse 'Math.randon'):
function numeroAleatorio (){
    return Math.random()*10;
}//Sempre que não passar um parâmetro será invocada.

function multiplicar (a,b=numeroAleatorio()){
    return a * b;
} 

console.log(multiplicar(8))