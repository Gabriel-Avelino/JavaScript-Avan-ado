//Após escrever o teste, escrevemos nosso código. Em seguida, refatoramos:
class Math {
    sum (a, b, callback){
        setTimeout(()=>{
            callback (a + b);
        }, 2500)
        
    }

    multiply(a,b) {
        return a * b
    }

    subtract(a,b) {
        return a - b
    }

    printSum(req, res, a, b){
        console.log(res.load('index', a + b))
    }
}

module.exports = Math