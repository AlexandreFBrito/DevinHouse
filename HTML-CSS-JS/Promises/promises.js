/* const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('result of promise')
    }, 1000);
});

promiseA
    .then((result) => console.log('result of promise', result))
    .catch((error) => console.log('Error', error))
    .finally(() => console.log('Finish')); */

const a = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve('result of a');
    }, 1000);
});

const b = () => new Promise((resolve)  => {
    setTimeout(() => {
        resolve('result of b');
    }, 500);
});

const c = () => new Promise((resolve)  => {
    setTimeout(() => {
        resolve('result of c');
    }, 1100);
});

/* Promise.race([a(), b(), c()]).then((data) => {
    console.log('success race', data);
}).catch((error) => {
    console.log('error on promise', error);
});

Promise.all([a(), b(), c()]).then((data) => {
    console.log('success all', data);
}).catch((error) => {
    console.log('error on promise', error);
}); */

const dojobs = async () => {
    try{
        const resultA = await a();
        const resultB = await b();
        const resultC = await c();
    
        return [resultA, resultB, resultC];
    }catch(error){
        return [null, null, null];
    }

}

dojobs().then((result) => {
    console.log('success', result);
}).catch((error) => {
    console.log('Error', error);
});