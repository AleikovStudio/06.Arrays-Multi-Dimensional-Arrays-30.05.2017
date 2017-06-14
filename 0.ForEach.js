let nums = [20, 30, 40, 10, 100, 5];
nums.forEach(n =>console.log(n));

//like the above but the full code:
nums.forEach(function (n) {
    console.log(n);
});

/////////////////////////////////////
nums.forEach((num, i)=>console.log(i + " -> " + num));

/////////////////////////////
nums.join("- ");
console.log (nums);