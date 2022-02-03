// fib series
// 0, 1, 1, 2, 3, 5, ...
/**
 * 1. create a recursive function to generate a fib number given the index
 *  a. if n == 0 , return 0
 *  b. if n < 3, return 1
 *  c. call itself with n-1 + n-2
 * 2. create a function to loop until the given index
 *  a. if 10 , it will generate indices [0, .., 9]
 *  b. create a loop the will insert fib number in order  
 *  
 */
function fibonacci(n) {
    if(n == 0) {
        return 0
    }
    if(n < 3) {
        return 1
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}

function listFib(el) {
    const fibArray = [];
    for(let i=0; i < el; i++) {
        fibArray.push(fibonacci(i))
    }

    return fibArray;
}

console.log(listFib(5))