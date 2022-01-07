//Esse código irá gerar um erro de referência, pois há um 'console.log' de uma variável "const" não declarada ainda (constantes não possuem a propriedade de hoisting):
console.log(nome);
const nome = 'Gabriel Avelino';

console.log('Carregando...'); //Essa linha de código não será executada, porque o JS interrompe a execução após ocorrer um erro.


//A forma tradicional de tratar erros é com try/catch:
try{
    console.log(nome);
    const nome = 'Gabriel Avelino';
}catch(err){
    console.log('Erro: ', err)
}

console.log('Carregando...'); //Aqui capturamos o erro com try/catch, podendo assim visualizá-lo e tratá-lo. E assim o último 'console.log' será executado.


//Também podemos usar um finally se quisermos, a execução terá o mesmo resultado:
try{
    console.log(nome);
    const nome = 'Gabriel Avelino';
}catch(err){
    console.log('Erro: ', err)
}finally{
    console.log('Carregando...'); 
}


//Podemos também criar erros customizados, pois erros são uma classe:
try{
    const nome = 'Gabriel Avelino';
    const meuErro = new Error ('Meu erro');

    throw meuErro; //Dispara o erro.
}catch(err){
    console.log('Erro: ', err) //Exibirá a mensagem customizada definida acima.
}finally{
    console.log('Carregando...'); 
}


//É possível não só passar strings para a classe de erro, como também podemos estendê-la para passar mais informações através de uma classe construtora:
class erroCustomizavel extends Error{
    constructor({ message, data }) {
        super(message);
        this.data= data;
    }
}

try{
    const nome = 'Gabriel Avelino';
    const meuErro = new erroCustomizavel ({
        message: 'Mensagem customizável',
        data: {
            type: 'Server Error'
        }
    });

    throw meuErro;
}catch(err){
    console.log('Erro: ', err) 
}finally{
    console.log('Carregando...'); 
}