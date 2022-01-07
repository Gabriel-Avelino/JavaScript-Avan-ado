//Os Objetos literais são objetos com a seguinte estrutura:
var obj = {
    nome: 'valor'
}


//Uma forma de definir o valor de uma propriedade é criando uma variável e referenciando ela no objeto:
var nome = 'Gabriel'

var obj = {
    nome: nome
} //O problema era repetir o mesmo nome para a propriedade e para a variável.

console.log(obj)


//Com o ES6, é possível fazer um shothand(forma abreviada), omitindo a parte direita, não sendo necessário repetir a palavra:
var nome = 'Gabriel'

var obj = {
    nome
} 

console.log(obj)


//Também é possível fazer isso com funções:
var metodo1 = () => {
    console.log('Método Chamado')
}

var obj = {
    metodo1
} 

obj.metodo1()


//Outra forma de escrever métodos é declarando a função dentro do próprio objeto:
var obj = {
    sum: function (a,b) {
        return a + b;
    }
} 

console.log(obj.sum(1,5))


//Outro shorthand do ES6 é omitir a palavra function, apenas usando os parênteses:
var obj = {
    sum (a,b) {
        return a + b;
    }
} 

console.log(obj.sum(1,5))


//Se observarmos o objeto, ele cria uma propriedade que aponta uma função:
var obj = {
    sum (a,b) {
        return a + b;
    }
} 

console.log(obj)


//Outro caso também é que se o desenvolvedor quisesse criar uma propriedade a partir de uma variável, seria necessário declarar o objeto e acessá-lo com colchetes.
var nome = 'teste'

var obj = {}


obj[nome]= 'Gabriel'

console.log(obj)


//Dentro dos colchetes ainda era possível usar a concatenação, fazer qualquer operação, colocar uma função que retorne o valor, etc.
var nome = 'teste'

var obj = {}
 

obj[nome + 'concat']= 'Gabriel'
//O problema é que era necessário criar o objeto e depois fazer a definição.

console.log(obj)


//Com o ES6, é possível criar a propriedade diretamente dentro do objeto:
var nome = 'teste'

var obj = {
    [nome + 'concat']: 'Gabriel'
}
 

console.log(obj)