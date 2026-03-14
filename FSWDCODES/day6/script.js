//control flow?
/*control flow -> the order in which the code runs
top->bottom =>line by line

conditions - decision making
loops - repetations
functions-resuable logic
how a particular program behaves.
*/

/*
console.log("start");
console.log("end");
*/

/*
if statement:-------------------------------------------
if(condition){
    code
}
*/

let age=20;
if(age>=18){
    console.log("you can vote");
}


/* if-else statement-------------------------------------------
*/
   let marks=35;
   if(marks>=40){
    console.log("Pass")
   }else{
    console.log("Fail");
   }

/*if else if ladder-------------------------------------------
*/
let score=85;
if(score>=90)
{
    console.log("Grade A");
}else if(score>=75){
    console.log("Grade B");
}else{
    console.log('fail');
}

let num=20;
if(num%2==0){
    console.log("even");
}else{
    console.log("odd");
}


/*loops-------------------------------------------
1. for loop */
for(let i=1;i<=5;i++){
    console.log(i);
}
/*
2. while loop-------------------------------------------
*/
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

/*
3.Nested loop-------------------------------------------
*/
for(let i=1;i<=5;i++){
    let stars= ' ';
    for(let j=1;j<=i;j++){
        stars+="*";
    }
    console.log(stars);
}

//break and continue-------------------------------------------
for(let i=1;i<=5;i++){
    if(i==3)break;
        console.log(i)
}

for(let i=1;i<=5;i++){
    if(i==3)continue;
        console.log(i)
}

//for->no. of iterations are known
//while->conditions based
/*
let sum=0;
for(let i=1;i<10;i++){
    sum=i*7;
    console.log(sum);
}

for(let i=1;i<=10;i++){
    console.log("7 *",i,'=',7*i);
}
*/

/*functions->reusable code-------------------------------------------
*/
function greet(name){
    console.log("hello", name);
}
greet("sahana");

//with return statement
function square(num){
    return num*num;
}
let result=square(5);
console.log(result);