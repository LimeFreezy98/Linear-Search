function linearSearch(arr, target) {
    for (let i =0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;  // return -1 if not found
}



const number =  [5, 7, 12, 17, 22, 40];

console.log("Array:", number);

 let  target1 = 22;
 let resault1 = linearSearch(number, target1);
 console.log(`Searching for ${target1}: Index =`, resault1);

 let target2 = 100;
let resault2 = linearSearch(number, target2);
console.log(`Searching for ${target2}: Index =`, resault2);