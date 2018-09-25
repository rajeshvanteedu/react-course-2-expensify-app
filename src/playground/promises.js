const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        //resolve('This is resolved data');
        reject('something went wrong --so reject');
    },1500);   
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((rejectedData) =>{
    console.log(rejectedData);
});

console.log('after');