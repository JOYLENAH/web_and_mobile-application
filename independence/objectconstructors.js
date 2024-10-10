//a constructor function
function School(name, location,studentsCount,schoolType){
    this.name =name;
    this.schoollocation=location;
    this.studentsCount=studentsCount;
    this.schooltype=schoolType;
    this.introduce=function(){
        return `l go ${this.name}and it is located in ${this.schoollocation}`;

    }
}
let school1=new School("Mt.MaryhighSchool","Lugazi","15","mixed");
let school2=new School("Cyprianhighschool","kyabakkadde","12","mixed")
 
console.log(school1.introduce());
console.log(school2.introduce());