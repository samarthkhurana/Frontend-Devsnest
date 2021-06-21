function is_array (input){
   var result =  Array.isArray(input);
    return result;
}

console.log(is_array('w3resource'));
console.log(is_array([1,2,4,0]));
