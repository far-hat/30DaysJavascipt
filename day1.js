var num1= 12;
console.log(num1);

let string1 = 'Day 1 of Javascript Challenge';
console.log(string1);

const flag = false;
console.log(flag);

let salary = 25000.50 //gies type of number
let studentInfo = {
    'name' : 'farhat',
    'address' : 'srinagar',
    'course' : 'javascript',
    'time' : 30
}
let subjects = ['js','pyton']; // array gies type of object
console.log(typeof(num1));
console.log(typeof(string1));
console.log(typeof(flag));
console.log(typeof(salary));
console.log(typeof(studentInfo));
console.log(typeof(subjects));

let name1 = 'farhat';
console.log(`name before changing ${name1}`);
name1 = 'talib';
console.log(`Name after value change ${name1}`);


const fathersName = 'gulzar';
console.log(`name before changing ${fathersName}`);
//fathersName = 'Gulzar'; // TypeError: Assignment to constant variable.
