let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequent (arr1, n){
    //sorting the array
    arr1.sort();

    // finding the maximum frequency using linear traversal
    
    let max_count = 1;
    result = arr1[0];
    let curr_count = 1;
    for (let i =1; i<arr1.length ; i++){
        if(arr1[i] == arr1[i - 1])
        curr_count++;
        else
        {
            if (curr_count > max_count){
                max_count = curr_count;
                result = arr1[i - 1]

            }
            curr_count = 1;
        }
    }

    // if the last element is most frequent
    if (curr_count > max_count){
        max_count = curr_count;
        result = arr1[arr1.length - 1];

    }
    return `${result} (${curr_count} times)`;
}

console.log(mostFrequent(arr1,arr1.length));
