console.log("Testing code...")

let str = "lokesh"
let newStr = ""
for(let i = str.length-1; i>=0; i--){
    newStr += str[i]
}

console.log(newStr);
///----------

console.log("Another testing for console...")
let arr = [1,2,3,4,5,6];
for(let i = 0, j=arr.length-1; i<j; i++,j--){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.warn(arr);
console.log(arr);