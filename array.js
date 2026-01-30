let arr = [1,2,3,4,5,6,7];

// let arr2 = new Array(10,20,30);


// console.log(arr2);
console.log(arr);
let subarray= arr.slice(2,6);//return  sliced  array
console.log(arr);
console.log(subarray); //return  sliced  array

// remove elements
arr.splice(2,3);// starting index ,no of elements to remove
console.log("sliced arr",arr);

//Remove and add elements splice(startIdx,noOFEle,elm1,elm2,elm3...elemN)
arr.splice(2,2,30,40,20,10);
console.log(arr);
// can be used in mist of the array
