//EventEmitter: classe exclusiva do Node para trabalhar com código assíncrono. Sua função é emitir notificações ou eventos em diversas partes do seu ciclo de vida. Para utilizar, primeiro importamos o seu módulo.
const EventEmitter = require ('events');

const emitter = new EventEmitter(); //Depois, instanciamos ou estendemos para utilizar;

emitter.on('User Logged', data =>{
    console.log(data);
}); //Então, podemos utilizar o 'on', que adiciona um callback que será executado quando o evento for acionado.

emitter.emit('User Logged', {user: 'Sérgio Eduardo'}); //Em seguida, usamos o 'emit', que aciona o evento.


//Abaixo está demonstrado como trabalhar usando o método de estender a classe de EventEmitter:
const EventEmitter = require ('events');

class Usuarios extends EventEmitter {
    userLogged (data){
        this.emit('User Logged', data);
    };
};
const usuarios = new Usuarios(); 

usuarios.on('User Logged', data =>{
    console.log(data);
}); 

usuarios.userLogged({user: 'Sérgio Eduardo'});


//Se quisermos consumir apenas uma vez, usamos o método 'once':
const EventEmitter = require ('events');

class Usuarios extends EventEmitter {
    userLogged (data){
        this.emit('User Logged', data);
    };
};
const usuarios = new Usuarios(); 

usuarios.once('User Logged', data =>{
    console.log(data);
}); 

usuarios.userLogged({user: 'Sérgio Eduardo'});
usuarios.userLogged({user: 'Marili dos Santos'});


//Se utilizassemos o 'on', ambos os usuários seriam logados:
const EventEmitter = require ('events');

class Usuarios extends EventEmitter {
    userLogged (data){
        this.emit('User Logged', data);
    };
};
const usuarios = new Usuarios(); 

usuarios.on('User Logged', data =>{
    console.log(data);
}); 

usuarios.userLogged({user: 'Sérgio Eduardo'});
usuarios.userLogged({user: 'Marili dos Santos'});


//Se quisessemos também poderíamos ter um 'setTimeOut' ou uma requisição:
const EventEmitter = require ('events');

class Usuarios extends EventEmitter {
    userLogged (data){
        setTimeout (()=> {      
            this.emit('User Logged', data)
        },2000);
    };
};

const usuarios = new Usuarios(); 

usuarios.on('User Logged', data =>{
    console.log(data);
}); 

usuarios.userLogged({user: 'Sérgio Eduardo'});
usuarios.userLogged({user: 'Marili dos Santos'});
//Assim, através dessa classe,  é possível lidar com eventos de forma assíncrona e ao mesmo tempo limitar a quantidade de subscrições. Então, teremos um código mais legível e de manutenção mais simples.


//Também podemos trabalhar com outro método chamado "EventTarget", que utilizará uma api do browser chamada "EventListeners". Esse método funcionará de maneira similar ao "EventEmitter", porém, será mais limitado.