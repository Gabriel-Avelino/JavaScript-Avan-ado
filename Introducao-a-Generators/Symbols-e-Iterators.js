//Antes da introdução dos symbols, existiam 6 tipos. Com o ES6, veio o symbol, que é uma maneira de gerar um identificador único, o que trouxe funcionalidades novas. Para gerá-lo, fazemos o seguinte:
const uniqueId = Symbol(); //Não pode ser invocado utilizando 'new'. Um symbol nunca é igual ao outro, ou seja, é um identificador único que não pode ser adivinhado ou escrito.

console.log(uniqueId)


//Também é possível passar um valor para o symbol, que será exclusivamente para efeitos de debug, ou seja, não estará ligado ao seu valor de fato:
const idUnico = Symbol('Hello'); 

console.log(idUnico)


//Se compararmos dois symbols onde passamos o mesmo valor, eles não serão iguais:
const idUnico = Symbol('Hello'); 
const idUnico2 = Symbol('Hello');

console.log(idUnico === idUnico2)


//Symbols podem ser utilizados para gerar propriedades "privadas" (não que elas sejam inacessíveis, mas sim são propriedades que se alteram apenas de forma intencional):
const idUnico = Symbol('Hello'); 

const obj = {
    [idUnico] : 'Hello'
}; 

console.log(obj)
console.log(Object.keys(obj)) //Não conseguimos ver as chaves do objeto.


//Só será acessível por quem tiver o symbol ou através do seguinte método:
const idUnico = Symbol('Hello'); 

const obj = {
    [idUnico] : 'Hello'
}; 

console.log(obj)
console.log(Object.getOwnPropertySymbols(obj)) //Assim, é possível obter as propriedades de symbol. Então, não é exatamente uma propriedade privada, mas sim, uma forma de indicar para outros desenvolvedores que essa é uma propriedade que não deve ser alterada.


//Porém, symbols não possuem somente essa função, eles também possuem propriedades chamadas "Well known symbols", que são utilizadas para adicionar propriedades ao objeto:
const idUnico = Symbol('Hello'); 

Symbol.iterator; //Especifica o iterador padrão para um objeto (passa meta propriedades).
Symbol.split; //Especifica o método que divide uma string nos índices correspondentes a uma expressão regular.
Symbol.toPrimitive; //Especifica uma propriedade com valor função que é chamada para converter um objeto para um valor primitivo correspondente.
Symbol.toStringTag; //Propriedade usada para a criação de uma descrição de string de um objeto padrão.

const obj = {
    [Symbol.iterator] () {
        
    }
}; 

console.log(obj)


//Symbol.iterator: existe por padrão em vários tipos, como arrays:
const arr = [1, 2, 3, 4, 5];

const iterador = arr [Symbol.iterator](); //Assim, podemos acessar a propriedade, symbol é usado para evitar a colisão de propriedades. Retorna um objeto que contém o método next.

console.log(iterador.next()); //Quando coloco next ele retorna cada índice da iteração.


//Um iterador é uma interface para você consumir passo-a-passo uma lista ou estrutura de dados.
//Cada vez que o next é invocado, ele traz um índice do array e a informação se há mais itens no array:
const arr = [1, 2, 3, 4, 5];

const iterador = arr [Symbol.iterator]();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next()); //Após invocar mais uma vez, quando não há mais itens no array, o valor vira 'undefined', pois a função para após o done ficar true, e o done vira 'true', pois o array acabou.


//Podemos até criar uma condicional que percorrerá o array indicando os valores:
const arr = [1, 2, 3, 4, 5];

const iterador = arr [Symbol.iterator]();

while(true) {
    let {value, done} = iterador.next()

    console.log(value);
    if (done){
        break
    }
}


//Com o ES6, não precisamos mais chamar o iterador, basta usar a seguinte estrutura:
const arr = [1, 2, 3, 4, 5];

for(let value of arr) {
    console.log(value);
};


//O 'for' também funciona com strings:
const str = 'Gabriel';

for(let value of str) {
    console.log(value);
}; //Irá separar os caracteres e colocará um em cada linha.


//Os well known symbols podem ser usados para fazer com que spread possa ser utilizado em objetos:
//Agora faremos uma função iteradora num objeto:
const obj = {
    valores : [1, 2, 3, 4, 5],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    valor: this.valores[i - 1],
                    done: i > this.valores.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


//Também podemos usar o for...of:
const obj = {
    values : [1, 2, 3, 4, 5],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const arr2 = [...obj];

console.log(arr2)
//Posso também fazer loops e definir a forma como vão percorrer.