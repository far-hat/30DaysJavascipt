//use strict;

let a = 120 , b = 6;
console.log(`Sum of ${a} + ${b} = ${a+b}`);
console.log(`Difference of ${a} - ${b} = ${a-b}`);
console.log(`Product of ${a} x ${b} = ${a*b}`);
if(b==0){
    console.log(`Division by zero not defined`);
}
else{
    console.log(`Dividend  of ${a} + ${b} = ${a/b}`);

}
if(b==0){
    console.log(`Division by zero not defined`);
}
else{
    console.log(`Remainder  of ${a} + ${b} = ${a%b}`);

}

let marks = 55;
console.log(`Total marks  = ${marks+=19}`);

let penalty = 5000;
console.log(`Penalty after deduction = ${penalty -= 1500}`);

let x = 6051992 , y = 1211993;
if(x>y){
    console.log(`${x} > ${y}`);
}
else{
    console.log(`${y} > ${x}`);
}
if(x>=y){
    console.log('Kaebsong');
}
else{
    console.log('Oh ho');
}

let i= 3, j = '3';
if(i===j){
    console.log('Both are of same type as well');
}
else {
    console.log(`Oops! both look alike but aren't of same type `);
}

let day = 'Sunday' , month = "July";
if (day== 'Sunday' && month == 'July'){
    console.log("Although it's weekend , better stay at home   :) ");
}

if(day == 'Sunday' || month == 'April'){
    console.log('Yay, lets go out. ');
}

let m = -13;

let isPositive =(m>0) ? console.log(`${m} is positive `): (m<0) ? console.log(`${m} is negative `) : console.log(`${m} is zero `);
