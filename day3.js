'use strict';

let a = 12;
function checkPositive(a){
    if(a==0){
        console.log('Number is zero ');
    }
    else if(a>0){
        console.log('Number is positive');
    }
    else{
        console.log('Number is negative');
    }
    
}
checkPositive(a);

function checkEligibleVoter(age) {
    if(age >= 18){
        console.log("You can exercise your right to vote");
    }
    else{
        console.log('Oops! You are not eligible to vote right now ');
    }
}

checkEligibleVoter(23);

function checkGreatestNum(a,b,c){
    if(a>b){
        if(a>c){
            console.log(`${a} is greatest of the three`);
        }
        else{
            console.log(`${c} is greatest of the three`);
        }
    }
    else{
        if(b>c){
            console.log(`${b} is greatest of the three`);
        }
        else{
            console.log(`${c} is greatest of the three`);
        }
    }
}
checkGreatestNum(14,8,6);

let day = 1;
switch(day){
    case 1 :{
        console.log('Sunday');
        break;
    }
    case 2 :{
        console.log('Monday');
        break;
    }
    case 3 :{
        console.log('Tuesday');
        break;
    }
    case 4 :{
        console.log('Wednesday');
        break;
    }
    case 5 :{
        console.log('Thursday');
        break;
    }
    case 6 :{
        console.log('Friday');
        break;
    }
    case 7 :{
        console.log('Saturday');
        break;
    }
}

let score = 8;
switch (score){
    case 10 : {
        console.log('A');
        break;
    }
    case 9 : {
        console.log('B');
        break;
    }
    case 8 : {
        console.log('C');
        break;
    }
    case 7 : {
        console.log('D');
        break;
    }
    case 5 || 6 : {
        console.log('E');
    }
    case  4 : {
        console.log('F');
        break;
    }
    default : {
        console.log('Wrong input! Try again');
    }
}

let number = 4;
(number%2 == 0) ? console.log('Even') : console.log('Odd');

let year = 2024;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log('Leap year');
        } else {
            console.log('Not a leap year');
        }
    } else {
        console.log('Leap year');
    }
} else {
    console.log('Not a leap year');
}
