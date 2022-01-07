//Esse código é uma demonstração de como funciona o Mocha, um sistema que testa códigos. Para utilizá-lo, basta iniciar o "npm" no  projeto, requerir o "assert" (um módulo nativo do node) e descrever o que a função fará. Se quisermos também podemos usar o chai (que possui a mesma função do assert, só que de uma maneira mais descritiva) e o sinon (um pacote de funcionalidades que nos permite verificar se as funções são executadas corretamente). Tanto o chai como o sinon são adquiridos da mesma forma do mocha:
const assert = require ('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect; //Aqui importamos o chai.
const sinon = require('sinon'); //Aqui requisitamos o sinon, que permite criar spies (ferramentas que observa a execução do nosso código), stubs (ferramentas que substituem um método) e mocks em servidores (ferramentas que testam vários cenários de uma só vez, que podem simular chamadas HTTP, para garantir que estejam corretas).

let valor = 0

describe('Math class', function(){

    beforeEach(function(){
        valor = 0
    })
    
    it('Sum two numbers', function(done){
        const math = new Math();
        this.timeout(5000); //Obs: o tempo máximo para a execução do mocha é de 2000 ms, se um setTimeout exceder esse tempo, ocorre um erro. Para isso, acrescentamos o método 'this.timeout', para aumentar o limite de tempo de execução. O mocha recomenda a utilização de funções normais para que todas as funcionalidades sejam utilizadas no escopo correto.
        
        valor = 5

        math.sum(valor,5, (value)=>{
            assert.equal(value,10); //Aqui usamos o assert ou o nosso expect que vem com o chai.
            done();
        });//Equal= Método para saber se dois valores passados são iguais. Caso não, dispara um erro. 
    }); //Com it, descrevemos o que a função deverá fazer. Em caso de uma operação assíncrona, nossa função do it recebe o parâmetro 'done' para que o teste não passe caso o valor seja diferente, ou seja, o done irá aguardar a execução de todo o código. 

    it('Divide two numbers'); //Também podemos criar testes ainda inexistentes, que ficarão pendentes. Assim, ao invés de comentar, podemos deixar o próprio código que vai alertar a necessidade de escrita desses testes.
/*
    it.only('Multiply two numbers', function(){
        const math = new Math();

        expect(math.multiply(valor, 5)).to.equal(0);
    }); //Também temos o método '.only', que executa apenas um teste.
*/
    it.skip('Subtract two numbers', function(){
        const math = new Math();

        assert.equal(math.subtract(valor, 5), 5);
    }); //Também  podemos usar o método '.skip' que pula a execução de um teste. 

    it('Object', function(){
        const obj ={
            nome: 'Gabriel'
        };

        expect(obj).to.have.property('nome'); //Também podemos usar testes para saber se uma certa propriedade existe dentro de um objeto, porém, isso só é possível com chai.
    });

    it('Object value', function(){
        const obj ={
            nome: 'Gabriel'
        };

        expect(obj).to.have.property('nome')
        .to.equal('Gabriel'); //Também podemos verificar o valor de uma propriedade com chai.
    });

    it('Two objects', function(){
        const obj ={
            nome: 'Gabriel'
        };

        const obj2 ={
            nome: 'Gabriel'
        };

        expect(obj).to.equal(obj2); //Podemos também comparar dois objetos, gerará um erro, pois essa comparação se refere a referência do objeto e não a seus valores.
    });

    it('Two objects value', function(){
        const obj ={
            nome: 'Gabriel'
        };

        const obj2 ={
            nome: 'Gabriel'
        };

        expect(obj).to.deep.equal(obj2); //Com essa função, comparamos o valor profundo dos objetos.
    });

    it.only('Calls req with sum and index values', function(){
        const req = {};
        const res = {
            load: sinon.spy()//Aqui utilizamos o sinon para criar um spy.
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.calledOnce).to.be.true; //Aqui verificamos se a função está sendo carregada corretamente. 

        expect(res.load.args[0][0]).to.equal('index'); //Aqui verificamos o valor do argumento [0][0].

        expect(res.load.args[0][1]).to.equal(10); //Aqui verificamos o valor da soma.
    });

    it.only('Calls req with sum and index values2', function(){
        const req = {};
        const res = {
            load: function load (){
                console.log("Called")
            }
        };

        sinon.spy(res, 'load')//Também podemos usar o sinon em funções já criadas.

        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.args[0][0]).to.equal('index');

        expect(res.load.args[0][1]).to.equal(10); 
    });

    it.only('Calls req with sum and index values3', function(){
        const req = {};
        const res = {
            load: function load (){
                console.log("Called")
            }
        };

        sinon.stub(res, 'load').returns('Gabriel') //Cria um stub. Depois, podemos usar um 'returns', que irá retornar um resultado customizável. O 'console.log' da função não será executado.

        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.args[0][0]).to.equal('index');

        expect(res.load.args[0][1]).to.equal(10); 
    });

    it.only('Calls req with sum and index values4', function(){
        const req = {};
        const res = {
            load: function load (){
                console.log("Called")
            }
        };

        sinon.stub(res, 'load').returns('Gabriel');

        const math = new Math();

        math.printSum(req, res, 5, 5);

        res.restore() //Faz o método voltar ao normal.

        expect(res.load.args[0][0]).to.equal('index');

        expect(res.load.args[0][1]).to.equal(10); 
    });
});


