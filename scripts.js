/*// Criação de promessa
const myPromise = new Promise((resolve,reject) => {

    const nome = "JÃO";

    if(nome === "JÃO"){
        resolve('Usuário '+ nome + " encontrado")
    } else {
        reject('O Usuário '+ nome +" não foi encontrado")
    }

})

myPromise.then((data) => {
    console.log(data);
})

//Encadeamento de then's:

const myPromise2 = new Promise((resolve,reject) => {

    const nome = "JÃO";

    if(nome === "JÃO"){
        resolve('Usuário '+ nome + " encontrado")
    } else {
        reject('O Usuário '+ nome +" não foi encontrado")
    }

})

myPromise2.then((data) => {
    return data.toLowerCase();
})
.then((stringCaxaBaxa) => {
    console.log(stringCaxaBaxa);
    return stringCaxaBaxa;
})
.then((stringCaxaAlta) => {
    console.log(stringCaxaAlta.toUpperCase());
})*/

//Retorno do catch

/*const myPromise3 = new Promise((resolve,reject) => {

    const nome = "JÃO";

    if(nome === "JÃaO"){
        resolve('Usuário '+ nome + " encontrado")
    } else {
        reject('O Usuário '+ nome +" não foi encontrado")
    }

})

myPromise3.then((data)=>{
    console.log(data);
}).catch((err) =>{
    console.log(err);
})
 */



//Resolver várias promessas com all

/*const p1 = new Promise((resolve, reject) =>{
    
    setTimeout(() =>{
        resolve('P1 ok! 2 segundo Timeout')
    }, 2000)
})

const p2 = new Promise((resolve, reject) =>{
    resolve('p2 ok!')
}).then((data) =>{
    console.log("data 2 fi" + data)
    return data;
})

const p3 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('P3 ok! 1 segundo Timeout')
    }, 1000)
}).then((data)=>{
    console.log(data);
    return data;
})

const resolveAll = Promise.all([p1, p2, p3]).then((data)=>{
    console.log(data)
})

console.log('oi')*/

/*function randerson(){
    return Math.random() * (5000 - 1000) + 1000;
}

const p1 = new Promise((resolve, reject) =>{
    const numero = randerson();
    setTimeout(() =>{
        resolve('P1 ok: '+numero)
    }, numero)
})

const p2 = new Promise((resolve, reject) =>{
    const numero = randerson();
    setTimeout(() =>{
        resolve('P2 ok: '+numero)
    }, numero)

})

const p3 = new Promise((resolve, reject) =>{
    const numero = randerson();
    setTimeout(() =>{
        resolve('P3 ok: ' + numero)
    }, numero)
})

const resolveAllRace = Promise.race([p1, p2, p3]).then((data)=>{
    console.log(data)
})

*/
//Fetch request na API do Github
//Fetch API

const userName = 'joaop-Cardoso'

fetch(`https://api.github.com/users/${userName}`,
{
    method: 'GET',
    headers:{
        Accept: 'application/vnd.github.v3+json',
    }
}).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    console.log('O nome do usuário é ' + data.name)
}).catch((err) => {
    console.log('Houve algum erro:' + err);
})