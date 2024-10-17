//an object representing boda boda
 function  bodarider(name,location,bodatype){
     this.bodaname=name;
     this.bodalocation=location;
     this.bodatype=bodatype;
     this.introduce=function(){
          return `l go ${this.bodaname},it is located in ${this.bodalocation}and l go to ${bodatype}`;
     }

}
let  bodarider3= new bodarider("james","kireka","singlemen association");
console.log(bodarider());




