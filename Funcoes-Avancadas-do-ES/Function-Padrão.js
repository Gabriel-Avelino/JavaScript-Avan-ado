//As funções normais são executadas da seguinte forma:
function log(param){
    console.log(param);
}

log ('teste')

//Também é possível usar as chamadas funções anônimas (sem nome), porém, somente se estiverem atribuídas à variáveis, ou se forem argumentos de outra função:
var log = function (param){
    console.log(param);
}

log ('teste')

//Se eu quisesse retornar algo, era só usar return:
function sum(a,b){
    return a + b;
}

console.log(sum(7,2))