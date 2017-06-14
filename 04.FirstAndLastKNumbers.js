function numbersK(arrNums) {
    let k = Number(arrNums.shift());//first we need to take and remove the first element!!! by using .shift operation (we need to get rid of it!)
    console.log(arrNums.slice(0,k).join(" "));
    console.log(arrNums.slice((arrNums.length-k),arrNums.length).join(" "));

}

numbersK([3,6,7,8,9]);