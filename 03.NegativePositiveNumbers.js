function negativePositive(arrNums) {
    let arrNew = [];
    for (let i of arrNums) {
        if (i < 0) {
            arrNew.unshift(i);//.unshift adds to the left - most first position
        }
        if (i > 0) {
            arrNew.push(i);//.push adds to the most right - end position
        }
        if (i == 0) {
            arrNew.push(i);
        }
    }
    console.log(arrNew.join("\n"));//prints the result on empty line
}

negativePositive([3, -2, 0, -1]);
