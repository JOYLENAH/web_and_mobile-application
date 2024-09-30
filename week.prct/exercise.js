//printing multiplication table for 1-10
let num=5;
for(let i=1;i<=12;i++){
    const result=5*i
    console.log(`${num} x ${i}=${result}`)
}


//a while loop for the sum from 1 - 10
//let i=1;
//while(i=1 ; sum i<=110)
let number = 0;
let j = 1;
while (j <=10){
    number+=j;
    j++;
}console.log(`the sum of numbers from 1 to 10`,number )

// a do loop
let i=1;
do{
    console.log(i);
    i++;
}while(i<=5);


//incase of breaking
for(i=1;i <=10;i++);{
  if (i==5);{
    break;// stops the loop when i=5
  }console.log(i)
  
}
 for(i=1;i<=10;i++);{
    if(i==5);{
        continue;//continues the iteration when i=5
    }console.log(i)
 }

 // writing a loop that reaches 7 then breaks
 for(i=1;i<=10;i++);{
    if(i==7);{
        break;
    }console.log(i)
 }
 //writing a program that prints numbers from 1to10 but skips even numbersusing continue
 for(let number=1;number<=10;number++);{
    if(number%2==0){
        continue;
    }console.log(number);
}