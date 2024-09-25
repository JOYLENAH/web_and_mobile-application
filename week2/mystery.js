let detectivename="joy"
let solvedcases=o;
let increment=increasesolvedcases+1;

function solvemystery(){
    console.log(`mystery solved!`)
}

function solvemystery(obvious){
    console.log(`this was an easy case`)
    console.log(`this one was tricky`)
}
solvemystery(obvious)

for(let x=1;x<=5;x++){
    console.log(`case x solved!`)
}

let suspectname="Mr.Green"
if(suspectname="Ms.scarlet"){
    console.log(`Ms.scarlet is a suspect`)
}else if(suspectname="Ms.scarlet"){
    console.log(`keep looking`)
}else if (suspectname="Mr.Green"){
    console.log(`mr.green is looking suspicious....`)
}