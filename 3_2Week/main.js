/*
const game1 = "3 3 6";
const game2 = "2 2 2";
const game3 = "6 2 5";

function solution(game) {
    const arr = game.split(" ");

    for(let i=0; i<arr.length; i++){
        arr[i] = parseInt(arr[i])
    }

    if (arr[0] == arr[1] && arr[1] == arr[2] && arr[0] == arr[2]) {
        console.log(10000 + arr[0]*1000)
    }
    else if (arr[0] == arr[1] || arr[0] == arr[2]) {
        console.log(1000 + arr[0]*100)
    }
    else if (arr[1] == arr[2]) {
        console.log(1000 + arr[1]*100)
    }
    else {
        let maxnum = Math.max(arr[0], arr[1], arr[2]);
        console.log(maxnum * 100)
    }
}

solution(game1)
solution(game2)
solution(game3)
*/

/*
let a = 1;
let b = '1';

console.log(a==b 
console.log(a===b)
*/

/*const N = 9;

for(let i=0; i<N; i++){
    console.log("%d * %d = %d", 2, i+1, (2*(i+1)))
}
*/

// const N = 7;

// for(let i=1; i<10; i++){
//     console.log('${N} * ${i} = ${i*N}')
// }

/*
const N = 24;

for(let i=0; i<N; i++){
    console.log("*".repeat(i+1))
}
*/

/*
const N = 24;
const str = '*';

for(let i=0; i<N; i++){
    let ans=''
    for(let j=0; j<=i; j++){
        ans += str
    }
    console.log(ans)
}
*/

/*
// => 익명함수

let k = [1, 4, 1, 2, 4, 2, 4, 2, 3, 4, 4];
const n = 2;

answer = k.filter(element => n === element).length;

console.log(answer)
*/

/*
let k = [20, 10, 35, 30, 7];

console.log(Math.max.apply(Math, k))
console.log(Math.min.apply(Math, k))
*/

/*
let k = [20, 10, 35, 30, 7];
let minValue = k[0];
let maxValue = k[0];

k.forEach(e => {
    minValue = Math.min(minValue, e);
    maxValue = Math.max(maxValue, e);
});

console.log(`최댓값 : ${maxValue}`);
console.log(`최솟값 : ${minValue}`);


console.log(`최댓값 : ${Math.max(...k)}`);
console.log(`최솟값 : ${Math.min(...k)}`);
*/

/*
function solve(arr){
    let sum = 0
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(solve([ㅅ1, 5, 3, 4]));
*/

function solution(num){
    let arr = [];
    for(i=1; i<=num; i++){
        if((num%i) == 0) arr.push(i);
    }
    return arr
}

const N = 110;
console.log(solution(N));