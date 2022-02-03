function swapVariable(a, b) {
    b = a + b;
    a = b - a; 
    b = b - a;

    return [a, b]
}

console.log(swapVariable(3, 9))