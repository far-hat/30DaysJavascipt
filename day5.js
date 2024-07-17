// activity 1

function checkOdd(num){
    if(num%2==0){
        console.log('even');
    }
    else{
        console.log('odd');
    }
}
//checkOdd(7);

function square(num){
    console.log(`Square of ${num} = ${num*num}`);
    return num*num;
}

//square(19);

//activity 2
const maxNum = function(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
console.log(maxNum(6,8));

const concatString = function (a,b){
    return a+b;
}
console.log(concatString('Hello','Monsoon'));

// activity 3

const sum = (a,b)  =>  a+b;
//console.log(sum(9,12));


let flag = (str)=> {
    if(str.includes('i')){
        return true;
    }
    else {
        return false;
    }
}
//console.log(flag('Jellyfish'));

//activity 4

function add(a,b=15){
    console.log(`Sum = ${a+b}`);
}
//add(9);

function greeting (pname, age = 30){
    console.log(` Welcome to Javascript ${pname}, your age is ${age}`);
}

// greeting('Pepper');

//activity 5

function hof (func,x){
    while(x>0){
        func();
        x--;
    }
}
hof(greeting,3);

function hof2(func1,func2,val){
    result = func1(val);
    func2(result);
}
hof2(square,add,3);