//Com o ES, surgiram novas formas de escrever função, chamadas arrow functions, que são funções anônimas:
var sum = (a,b) => a + b;

console.log(sum(9,5)); //return implícito


//Quando queremos apenas uma expressão, não precisamos de "{}" e return após a seta, agora, se queremos fazer outros tipos de comandos, ou colocar mais de uma ação, as chaves e o return são necessários:
var sum = (a,b) => {
    var x = 10
    let c = 0

    if (a%2==0){
        c= a + x
    } else {
        c=a
    }
   return c + b;
}

console.log(sum(10,5));


//Existem várias formas de escrever arrow function. Se tivermos apenas um parâmetro podemos omitir os parênteses
var sum = a => a + 5;

console.log(sum(9));


//Se houver mais de um argumento, destructure, default values ou rest operator, é obrigatório escrever o parêntesis, como os exemplos abaixo:

//destructure
var sum = ({a}) => a + 5;

console.log(sum(9));

//Rest Operator
var sum = (...a) => a + 5;

console.log(sum(9));

//Default Values
var sum = (a = 5) => a + 5;

console.log(sum(9));

//Também podemos retornar objetos de forma implícita, colocando "({})" após a seta:
var criarObjeto = () => ({ teste: 123 });

console.log(criarObjeto());


//Também podemos criar objetos através de funções construtoras:
function carro (){
    this.foo= 'bar'
}

console.log(new carro());


//Porém, não é possível usar funções construtoras em arrow function:
var carro = () =>{
    this.foo= 'bar'
};


console.log(new carro());


//Devemos considerar também a característica de Hoisting, que içará as variáveis para o início do código durante a execução:
//Com funções normais, é possível invocar funções antes de declará-las.
log('teste')

function log(value){
    console.log(value)
}


//Já com arrow function não é possível.
log('teste')

var log = value => {
    console.log(value)
}


//Além da escrita mais enxuta, existe outra vantagem em arrow functions. 
//As funções no JS são executadas no contexto de onde são invocadas(contexto de invocação), referenciando assim o próprio objeto onde a função está sendo invocada. Assim, não sabemos para qual método a função está sendo apontada
var obj = {
    showContext: function showContext () {
        console.log(this); //tá referenciando o próprio objeto, mas não mostrará o resultado, apenas o contexto.
    },
    log: function log (value){
        console.log(value);
    }
};

obj.showContext();


//Para isso, seria necessária uma alteração para funcionar corretamente:
var obj = {
    showContext: function showContext () {
        this.log('teste'); //tá referenciando o próprio objeto, que também possui um contexto log.
    },
    log: function log (value){
        console.log(value);
    }
};

obj.showContext();


//Porém, nem tudo é tão simples, pois ela tem o contexto de invocação. Digamos que eu use um setTimeout, uma função de dois parâmetros, o primeiro que é a função que será executada, e o segundo o tempo em que ela executará
var obj = {
    showContext: function showContext () {
        this.log('teste'); 

        setTimeout(function(){
            this.log('Depois de 1000ms'); //Resultará em um erro que dirá que isso não é uma função.
        }, 1000);
    },
    log: function log (value){
        console.log(value);
    }
};

obj.showContext();


//Isso ocorre porque funções utilizadas no setTimeOut devem ser globais.
//Se colocarmos "console.log(this)", ocorrerá outro erro:
var obj = {
    showContext: function showContext () {
        this.log('teste'); 

        setTimeout(function(){
            console.log(this) //Perceberemos que o this aqui é o window, o que causará várias confusões de escopo e contexto.
        }, 1000);
    },
    log: function log (value){
        console.log(value);
    }
};

obj.showContext();


//Para resolver isso, podemos utilizar o método ".bind" para fixar o contexto da função:
var obj = {
    showContext: function showContext () {
        this.log('teste'); 

        setTimeout(function(){
            console.log(this);
        }.bind(this), 1000); //Assim, ele apontará o contexto correto, porém, caso o desenvolvedor esqueça o bind, o JS quebra.
    },
    log: function log (value){
        console.log(value);
    }
};

obj.showContext();


var obj = {
    showContext: function showContext () {
        this.log('teste'); 

        setTimeout(function(){
            this.log('Depois de 1000ms'); //Assim, mostrará o resultado.
        }.bind(this), 1000); 
    },
    log: function log (value){
        console.log(value);
    }
};

obj.showContext();


//Outra maneira utilizada antes do ES6 era utilizar uma variável a parte para referenciar o contexto:
var obj = {
    showContext: function showContext () {
        var _that = this //Porém, era necessário sempre lembrar de criar essa variável, além de deixar o código mais poluído e menos claro.

        setTimeout(function(){
            _that.log('Depois de 1000ms'); 
        }, 1000); 
    },
    log: function log (value){
        console.log(value);
    }
};

obj.showContext();

//Com a criação das arrow functions, passou a existir uma solução bem mais fácil:
var obj = {
    showContext: function showContext () {
        //this = obj
        setTimeout(() =>{
            this.log('Depois de 1000ms'); 
        }, 1000); //Funciona porque o arrow fumction possui o mesmo contexto do código que o envolve(contexto léxico). Nesse caso, não podemos usar o '.bind', pois geraria problemas.
    },
    log: function log (value){
        console.log(value);
    }
};

obj.showContext();