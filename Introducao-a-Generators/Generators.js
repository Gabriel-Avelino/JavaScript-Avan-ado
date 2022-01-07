//São funções com pausas, que podem despausar e retornar valores através da interface de iteração. Observe a função que será usada como exemplo:
function hello () {
    console.log("Hello");
    console.log("from");
    console.log("Function!");
}

hello();


//Agora digamos que queremos que a função retorne um valor, faça uma pausa, retorne outro valor, etc. Com funções puras é possível fazer, porém, seria muito trabalhoso, necessitaríamos de uma lógica e não haveria um bom aproveitamento de memória.
//Com generators, isso ficaria dessa maneira:
function* hello () {
    console.log("Hello");
    yield;

    console.log("from");
    yield;

    console.log("Function!");
}

const it = hello(); //Usamos o iterador para criar um objeto generator.
console.log(it.next()); //Usamos várias vezes o next para visualizar a execução em partes.
console.log(it.next());
console.log(it.next());


//Caso eu queira passar algum valor, é só usar um argumento no yield:
function* hello () {
    console.log("Hello");
    yield 1;

    console.log("from");
    yield 2;

    console.log("Function!");
}

const it = hello(); 
console.log(it.next()); 
console.log(it.next());
console.log(it.next()); //Então, o generator pode ser usado para construir iteradores de forma mais simples.


//Também é possível receber valores do lado de fora de uma função e passar para dentro:
function* hello () {
    console.log("Hello");
    yield 1;

    console.log("from");
    const valor = yield 2;//Retorna na iteração anterior

    console.log(valor);
}

const it = hello(); 
console.log(it.next()); 
console.log(it.next());
console.log(it.next('Outside!')); //É executado posteriormente. Isso permite controlar o fluxo de dados.


//Podemos usar os generators para pegar um range de números infinitos:
function* numerosNaturais () {
    let numero = 0
    while(true){
        yield numero;
        numero++;
    }
}

const it = numerosNaturais(); 
console.log(it.next()); //Só executará os comandos do loop infinito a cada invocação do next.
console.log(it.next());
console.log(it.next());


//Também é possível usar generators para criar a interface de iteração. Pra isso pegaremos um exemplo passado na explicação de symbols:
const obj = {
    values : [1, 2, 3, 4, 5],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj){
    console.log(value);
} //Não é preciso se preocupar em criar um objeto com o método next.


//Também existem bibliotecas que usam generators para lidar com código assíncrono, então, a função manda uma promise, a biblioteca resolve, e depois, retorna um valor. Um exemplo desse tipo de biblioteca seria o 'co'. No React também temos esse tipo de funcionalidade.