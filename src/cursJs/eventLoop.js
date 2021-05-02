

setTimeout(()=>console.log("setTimeout 1"),0)
Promise.resolve().then(()=>console.log('Promise 1'))
Promise.resolve().then(()=>setTimeout(()=>console.log("Promise setTimeout 3"),0))
Promise.resolve().then(()=>console.log('Promise 2'))
setTimeout(()=>console.log("setTimeout 2"),0)
console.log("console.log() 1")

/*
В EventLoop
Promise(микротаск) поопадают в микротаски, а микротаски всегда выполняются перед макротаскаями
setTimeout(макротаск) - вызываеются после, и выполняются по порядку, так как кладутся в очередь
Если в промисе сеттаймаут то он считается как сеттаймаут но вызывается после всех сеттаймаутов
console.log() 1
Promise 1
Promise 2
setTimeout 1
setTimeout 2
Promise setTimeout 3
*/

Promise.resolve(123)
.then(x=>{console.log(x);return x+1;})
.catch(x=>{console.log(x);return x+2;})
.then(x=>{console.log(x); return x+3;})
//123,124



