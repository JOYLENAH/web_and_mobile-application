let globalVar = "I'm a global variable";
function testScope() {
let localVar = "I'm a local variable";
console.log(globalVar); 
console.log(localVar); 
}
testScope();
console.log(globalVar); 