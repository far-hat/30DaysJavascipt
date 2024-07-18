"use strict;"

// activity 1

let arr1 = [1,2,3,4,5];
console.log(arr1);
console.log(arr1[0], arr1[arr1.length-1]);

//activity 2

arr1.push(6);
console.log(arr1);

arr1.pop();
console.log(arr1);

let element = arr1.shift();
console.log(' after shift ',arr1);
console.log('shifted element is ',element);

arr1.unshift(9);
console.log('Array after unshift is' , arr1);

//  activity 3
arr2= arr1.map(element => element*element)
console.log(arr2);

let arr3 = arr1.filter(num => {
    if(num%2 == 0){
        return num;
    }
});
console.log(arr3);


let result = arr1.reduce((sum,num) => {
   return sum + num;
}, 0);
console.log(result);


// activity 4
for(i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

arr1.forEach(element => {
    console.log(element);
});

// activity 5

let a = [[2,3],[6,7]];
console.log(a);
// printing 2nd element from 2nd row
console.log(a[1][1]);