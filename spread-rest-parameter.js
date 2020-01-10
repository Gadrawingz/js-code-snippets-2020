let arr = [3, 6, 1];
document.write("<hr>"+ Math.max(...arr) ); //5 (spread turns array into a list of arguments)

// We also can pass multiple iterables this way:

let arr1 = [1, -2, 33, 4];
let arr2 = [9, 10, -2, 6];
document.write("<br>"+ Math.max(...arr1, ...arr2) ); // 33

// We can even combine the spread syntax with normal values:

let arr3 = [3, 5, 10, 5];
let arr4 = [19, 51, -4, 1];
document.write("<br>"+ Math.max(1, ...arr3, 60, ...arr2, 50) ); // 60

// Also, the spread syntax can be used to merge arrays:


let arr5 = [3, 5, 1];
let arr6 = [8, 9, 15];
let merged = [0, ...arr5, 2, ...arr6];

document.write("<br>"+ (merged) ); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

// Gad Iradufasha
