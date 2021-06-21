function array_Clone(input){
    var result = input.slice(0)
    return result
}

console.log(array_Clone([1,2,4,0]));
console.log(array_Clone([1,2,[4,0]]));