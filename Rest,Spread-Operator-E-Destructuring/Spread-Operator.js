//Agora, se queremos passar uma função com rest operator para dentro de outra, usamos o método apply. para exemplificar, faremos a seguinte função:
var mult= (...args)=> args.reduce((acc,value)=> acc * value, 1)

var sum = (...rest) => {
   return mult.apply(undefined, rest);
}; //O problema do apply, é que ele também deixa o código verboso.

console.log(sum(7, 2, 8, 6, 2, 9))


//Com o ES6, foi criado o spread operator, para simplificar essa ação. També é representado por '...':
var mult= (...args)=> args.reduce((acc,value)=> acc * value, 1)

var sum = (...rest) => {
   return mult(...rest);
}; //Quebra os itens e passa para algum lugar. 

console.log(sum(7, 2, 8, 6, 2, 9))


//Pode ser utilizado não só em listas, como também em strings, arrays, objetos literais e objetos iteráveis.
//Em strings funciona da seguinte maneira:
const string = "Gabriel";

var logArgs = (...args) => {
    console.log(args)
}

logArgs(...string) //Quebra a string em caracteres e põe em uma lista.


//Em arrays, funcionam da seguinte forma:
const array = [1, 2, 3, 4, 5]

var logArgs = (...args) => {
    console.log(args)
}

logArgs(...array) //Cada item do array vira um argumento da função.


//Também é possível usar spread operator para construir arrays:
const array1 = [1, 2, 3, 4, 5]
const array2 = [...array1, 6, 7, 8, 9, 10]

var logArgs = (...args) => {
    console.log(args)
}

console.log(array2)


//É possível usar também quando queremos juntar mais de dois arrays:
const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]
const array3 = [...array1, ...array2, 11, 12, 13, 14, 15]


var logArgs = (...args) => {
    console.log(args)
}

console.log(array3)


//É possível usar spread também para clonar arrays:
const arrayOriginal = [1, 2, 3, 4, 5]
const arrayClone = [...arrayOriginal]


var logArgs = (...args) => {
    console.log(args)
}

console.log(arrayClone)


//Para objetos literais, utilizamos somente para a criação de novos objetos:
const obj = {
    nome: 'Gabriel'
} 

const obj2 = {
    ...obj,
    Idade: 17
}//Assim como o array, usamos o spread para transferir os dados para o outro objeto.

console.log(obj2)


//Não é possível usar o spread para colocar informações de um objeto em um array. Para usar spread é necessário que sejam objetos iteráveis (um outro tipo de objeto):
const obj = {
    nome: 'Gabriel'
} 

const array = [...obj]


//Se tivermos dois objetos com propriedades iguais, o mais recente prevalece:
const obj = {
    nome: 'Gabriel'
} 

const obj2 = {
    nome: 'Sérgio'
} 

const spreadMerged = {
    ... obj,
    ...obj2
}

console.log(spreadMerged)


//Se um objeto é igual a outro, e eu altero um, ambos são alterados, pois os dois apontam para o mesmo lugar:
const obj = {
    nome: 'Gabriel'
} 

const obj2 = obj

obj2.nome = 'Sérgio'

console.log(obj)


//Assim, o spread é usado para gerar clones, e ao mesmo tempo, impedir o segundo objeto de referenciar o primeiro. Então, dessa forma o primeiro objeto não é alterado:
const obj = {
    nome: 'Gabriel'
} 

const obj2 = {...obj} 

obj2.nome = 'Sérgio'

console.log(obj)


//Esses clones são chamados Shallow Clones, porque são objetos que se tiverem outros objetos como propriedades, alterarão a propriedade do primeiro objeto também, caso o segundo seja modificado:
const obj = {
    nome: 'Gabriel',
    subObj:{
        Idade: 15
    }
} 

const obj2 = {...obj} 

obj2.subObj. Idade = 45

console.log(obj)


//Para o primeiro não ser modificado, será necessário criar um novo subobjeto com spread:
const obj = {
    nome: 'Gabriel',
    subObj:{
        Idade: 15
    }
} 

const obj2 = {...obj, subObj: {...obj.subObj}} 

obj2.subObj. Idade = 45

console.log(obj)