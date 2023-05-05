/* 1번 문제
console.log('         ,r\'\"7')
console.log('r`-_   ,\'  ,\/')
console.log(' \\. \". L_r\'')
console.log('   \`~\\/')
console.log('      |')
console.log('      |')
*/


/* 2번 문제
const year1 = 2012;
const year2 = 1900;
const year3 = 2000;

function isLeapYear(year){
    if(year%400 == 0){
        console.log(1)
    }
    else if(year%4 == 0 && year%100 != 0){
        console.log(1)
    }
    else{
        console.log(0)
    }
}

isLeapYear(year1)
isLeapYear(year2)
isLeapYear(year3)
*/


/* 3번 문제
const n = 24

for(i = 1; i < n+1; i++){
    console.log(' '.repeat(n-i), '*'.repeat(i))
}
*/


/* 4번 문제
const C1 = [5, 50, 50, 70, 80, 100];
const C2 = [7, 100, 95, 90, 80, 70, 60, 50];
const C3 = [3, 70, 90, 80];
const C4 = [3, 70, 90, 81];

function avg_rate(C){
    let sum = 0;
    let avg = 0;
    let count = 0;

    for(i = 0; i < C.length; i++){
        sum += C[i]
    }
    avg = sum / C.length
    
    for(i = 0; i < C.length; i++){
        if(C[i] > avg){
            count += 1
        } 
    }
    console.log((count/C.length).toFixed(3))
}

avg_rate(C1)
avg_rate(C2)
avg_rate(C3)
avg_rate(C4)
*/
 

/* 5번 문제
const n = 2;

for(i=1; i < 10; i++){
    console.log("%d * %d = %d", n, i, n*i)
}
*/