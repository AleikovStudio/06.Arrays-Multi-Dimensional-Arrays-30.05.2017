function sumFirstLast(arr) {
    let n1 = Number(arr[0]);
    let n2 = Number(arr[arr.length - 1]);
    console.log(n1 + n2);
}

sumFirstLast(['20', '30', '40']);

//2nd solution:

function sum(array) {
    return Number(array[0]) + Number(array[array.length - 1]);
}

console.log(sum(['15', '55']));