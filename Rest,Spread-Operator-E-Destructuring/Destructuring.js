//Existem vários casos onde pegamos partes de variáveis e atribuímos a outras. Digamos que tenhamos o seguinte caso:
var array = ['Maçã', 'Carambola', 'Goiaba', 'Pitanga'];

var maca = array[0];
var carambola = array[1];
var goiaba = array[2];
var pitanga = array[3];
//A forma normal de fazer isso seria usando os índices do array. O problema disso é que isso é uma forma verbosa.

console.log(maca);
console.log(carambola);
console.log(goiaba);
console.log(pitanga);


//Com o surgimento do ES6 e do Destructuring assingment, surgiu uma nova forma de escrever:
var array = ['Maçã', 'Carambola', 'Goiaba', 'Pitanga'];

var [maca, carambola, goiaba, pitanga] = array;

console.log(maca);
console.log(carambola);
console.log(goiaba);
console.log(pitanga);
//Nesse caso, o array é destruído, e os valores são atribuídos a variáveis.


//Agora digamos que temos um quinto item que é outro array. No método normal, isso seria dessa forma:
var array = ['Maçã', 'Carambola', 'Goiaba', 'Pitanga', ['Tomate']];

var maca = array[0];
var carambola = array[1];
var goiaba = array[2];
var pitanga = array[3];
var tomate = array[4] [0];

console.log(maca);
console.log(carambola);
console.log(goiaba);
console.log(pitanga);
console.log(tomate);


//No destruturing assingment, também é possível trabalhar com os arrays multidimensionais
var array = ['Maçã', 'Carambola', 'Goiaba', 'Pitanga', ['Tomate']];

var [maca, carambola, goiaba, pitanga, [tomate]] = array;

console.log(maca);
console.log(carambola);
console.log(goiaba);
console.log(pitanga);
console.log(tomate);


//O que devemos nos atentar é que o índice com array deve existir para não ocorrer um erro:
var array = ['Maçã', 'Carambola', 'Goiaba', 'Pitanga'];

var [maca, carambola, goiaba, pitanga, [tomate]] = array;

console.log(maca);
console.log(carambola);
console.log(goiaba);
console.log(pitanga);
console.log(tomate); //Não é iterável, pois é um índice inexistente.


//Agora, se apenas temos índice normal e o valor não existe, teremos o resultado undefined:
var array = ['Maçã', 'Carambola', 'Goiaba'];

var [maca, carambola, goiaba, pitanga] = array;

console.log(maca);
console.log(carambola);
console.log(goiaba);
console.log(pitanga);


//O destruturing também pode ser usado para quebrar objetos. Se quisermos pegar uma propriedade do jeito normal, fazemos o seguinte:
var obj = {
    nome: 'Sérgio'
};

var nome = obj.nome;

console.log(nome);


//Com destruturing pode ser feito dessa maneira:
var obj = {
    nome: 'Sérgio'
};

var {nome} = obj;

console.log(nome);


//Se queremos atribuir um nome diferente a essa nova variável, usamos o seguinte método:
var obj = {
    nome: 'Sérgio'
};

var {nome: cliente} = obj;

console.log(cliente);


//Um ponto importante é que se alteramos a nova variável, o objeto original não é alterado:
var obj = {
    nome: 'Sérgio'
};

var {nome: cliente} = obj;

cliente = 'Gabriel';

console.log(obj);


//Também é possível fazer destructuring em objetos com subobjetos dentro. Na forma anteiga, isso era feito da seguinte maneira:
var obj = {
    nome: 'Sérgio',
    props:{
        idade: 47
    }
};

var idade = obj.props.idade;

console.log(idade);


//Com destructuring, ficaria dessa maneira:
var obj = {
    nome: 'Sérgio',
    props:{
        idade: 47
    }
};

var {props: { idade }} = obj; 

console.log(idade);


//Se quisermos também podemos defibir um nome customizável para nossa variável idade:
var obj = {
    nome: 'Sérgio',
    props:{
        idade: 47
    }
};

var {props: { idade: anos }} = obj; 

console.log(anos);


//Também podemos fazer destructuring de arrays dentro de um objeto:
var obj = {
    nome: 'Sérgio',
    props:{
        idade: 47,
        coresFavoritas : ['azul', 'verde', 'laranja']
    }
};

var {props: { idade: anos, coresFavoritas : [color1, color2, color3] }} = obj; 

console.log(anos + '\n', color1 + '\n', color2 + '\n', color3 + '\n');


//E de objetos dentro de arrays:
var array = [{nome: 'laranja', cor: 'laranja'}, 
{nome: 'uva', cor: 'roxa'}, 
{nome: 'banana', cor: 'amarela'}];

var [{nome: nome1, cor: cor1}, {nome: nome2, cor: cor2}, {nome: nome3, cor: cor3}] = array; 

console.log(nome1, cor1 + '\n', nome2, cor2 + '\n', nome3, cor3 + '\n',)


//Destructuring também pode ser usado para uma lista de argumentos de uma função. No método tradicional, era feito da seguinte forma:
function soma (arr){
    return arr [0] + arr[1]
}

console.log (soma([6,5,9,2,3]))


//No destructuring é feito dessa forma:
function soma ([a, b, c, d, e]){
    return a + b
}

console.log (soma([6,5,9,2,3]))


//Também posso usar junto com default values:
function soma ([a, b, c, d, e] = [6,5,9,2,3]){
    return a + b
}

console.log (soma())


//Se algum valor for passado ao invocar essa função, o default values será ignorado.
function soma ([a, b, c, d, e] = [6,5,9,2,3]){
    return a + b
}

console.log (soma([1,2]))


//O mesmo também funciona com funções que possuem objetos como argumentos:
function soma ({a, b, c, d, e}){
    return a + b
}

console.log (soma({a:1, b:2})) 
//E outras operações iguais as que fizemos acima podem ser feitas na lista de parâmetros.