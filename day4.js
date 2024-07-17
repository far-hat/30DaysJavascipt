//Activity 1
// for(let num =1; num<=10;num++){
//     console.log(num);
// }

// for(let num = 1; num<=10; num ++){
//     console.log(`5 * ${num} = ${5*num}`);
// }
//Activity 2
// let num = 1 , sum=0;
// while(num<=10){
//     sum+=num;
//     num++;
// }
// console.log(`Sum of numbers from 1 to 10 ${sum}`);

// num =10;
// while(num>0){
//     console.log(num);
//     num--;
// }

//Activity 3

// let num = 1,factorial =1;
// do{
//     console.log(num);
//     num++;
// } while(num<6);

// num =9;
// do{
//     factorial *= num;
//     num--;
// }while(num>0);
// console.log(factorial);

//activity 4


for(let i = 1; i < 6; i++ ){
    for(let j =1 ; j <= i ; j++){
       process.stdout.write('❄️  ');
    }
    console.log('');
}

//activity 5

for(let i = 1 ; i<11; i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

for(let j = 1; j<11 ; j++){
    if (j==7){
        break;
    }
    console.log(j);
}
