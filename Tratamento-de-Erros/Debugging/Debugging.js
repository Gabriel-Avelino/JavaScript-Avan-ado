//A prática de debugging é importante para a visualização e correção de erros em nosso código. Existem diversos métodos para a sua realização, que incluem a utilização da interface de desenvolvedor do browser, que nos avisa da existência tanto de erros de requisição, como de erros de código:
let value = 0

function button () {
    value++;
    document.getElementById("contagem").innerHTML= value;
}


//Podemos utilizar todos esses métodos de console para localizar erros em nosso código. Eles escreverão diversos tipos diferentes de mensagens:
console.log('%c styled log', 'color: blue; font-size: 40px') //Com um segundo parâmetro, podemos customizar as mensagens de "console.log". É um recurso limitado.
console.warn('Warning');
console.error('Erro');
console.trace();

console.group('Grupo');
console.log('Mensagem1');
console.log('Mensagem2');
console.groupEnd('Fim');

console.time('Log time');
setTimeout(()=>{
    console.timeEnd('Log time');
}, 2000)

console.table(['Gabriel Avelino', 'sérgio Eduardo']);
console.assert(1 === 3, 'Erro');

debugger; //Podemos também parar a execução do nosso código com a palavra debugger.
function button2 () {
    value--;
    document.getElementById("contagem").innerHTML= value;
}

//Através da aba de desenvolvimento do browser é possível fazer alterações em tempo real e visualizar os resultados.