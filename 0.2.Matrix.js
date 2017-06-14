let matrix = [
    [4, -6, 3, 0],
    [2, 1, -23],
    [-5, 17],
    [7, 3, -9, 12]
];

console.log(matrix.map(row=>row.join(" ")).join("\n"));

//2nd matrix
let m = [
    [4, -6, 3],
    [2, 1, -23]
];

//kratak red za izvejdane na matrici:
for (let row in m) {//obhojda poziciite
    console.log(m[row].join(" "));
}

//dalag nachin na izvejdane na matrix:
for (let row = 0; row < m.length; row++) {
    let str = "";
    for (let col = 0; col < m[row].length; col++) {
        str += m[row][col] + " ";
    }
    console.log(str);

}