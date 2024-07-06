//Problem : Download data from url
//Callback 
//Callbacks are functions passed to another function as an argument, to handle asynchronous operation
function fetchDataUsingCallback(url,processData){
    console.log('Downloading data from ',url);
    setTimeout(function process(){
        const data = "dummy data";
        console.log('Downloading complete');
        processData(data);
    }, 3000);
}

fetchDataUsingCallback('www.google.com',function processData(res){
    console.log('download response is ',res);
})
//Cons:
/*
1.Callback hell : Callback inside a callback, callback inside a callback will lead to callBack hell
Code readability hampers makes a code hard to read
2.Inversion of control (M): We are passing the control of our function to someone else.
Like if we don't know about the code it executes are function twice, if its booking app it will do 2 times booking
[Loss the control of our business logic]
*/

//Promise
/*
Promise is an object that is used as a placeholder for the eventual result of async computation
It has 3 states pending, fulfilled and rejected
*/
function fetchDataUsingPromise(url){
   console.log('Downloading data from url',url);
   return new Promise(function f(resolve,reject){
     setTimeout(()=>{
        const data = "promise data"
        console.log('Downloading complete');
        resolve(data);
     },3000)
   })
}

fetchDataUsingPromise("www.yahoo.com")
.then(function processData(value){
    console.log('download response is ',value);
})
/**
 * Above code solves the inversion of control but still gets the promise hell
 */

//Async Await
/**
 * Async await syntactic sugar on top of promises. 
 * It allows writing async code in a easier manner making the code more readable and maintainable
 */
function fetchDataUsingAsync(url){
   console.log('Downloading data from ',url);
   return new Promise(function f(resolve,reject){
      setTimeout(()=>{
        const data = "async await data"
        console.log('Downloading complete');
        resolve(data);
      },3000)
   })
}

async function process(){
   const data = await fetchDataUsingAsync("www.gmail.com");
   console.log('download response is ',data);
}
process();