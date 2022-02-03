function getIndexOfchar(str, char) {
    const strToArr = [...str]
    return strToArr.reduce((results, elem, index) => {
        return elem.toLowerCase() === char.toLowerCase() 
            ? [...results, index] 
            : results
    }, [])
}

console.log(getIndexOfchar('for five six seven', 'e'))