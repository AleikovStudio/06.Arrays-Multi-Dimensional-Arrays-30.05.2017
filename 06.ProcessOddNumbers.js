function firstLastKElements(arrNum) {
    let odd = (arrNum.filter((num, i)=>i % 2 == 1));//filter the array to get the odd positions i
    //console.log(odd);//just checking
    let double = odd.map(x=>x * 2);
    //console.log(double);//just checking
    let reverse = (double.reverse()).join(" ");
    console.log(reverse);
}

firstLastKElements([10, 15, 20, 25]);

//2nd solution:
function solve(arr) {
    let result = arr
        .filter((num, i)=>i % 2 == 1)
        .map(x=>x * 2)
        .reverse()
        .join(" ");
    console.log(result);
    //or in one row:
    //let result = arr.filter((num, i)=>i % 2 == 1).map(x=>x * 2).reverse().join(" ");
}

solve([3, 0, 10, 4, 7, 3]);