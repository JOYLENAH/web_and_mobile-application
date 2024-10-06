//calculating method
let school={
    name:"st mary lugazi",
    schoollocation:"lugazi",
    studentCount:"15",
    establishedYear:"2015",
    schoolType:"secondary",
    calculateschoolage: function(){
        const currentyear =new
        Date().getFullYear();
        return currentyear -
        this.establishedYear;
    },
    printschoolage: function(){
        console.log(`the school age is ${this.calculateschoolage()}year`)
    }
    
};let schoolage =school.calculatschooleage(15);
console.log(`schoolage for ${calculateage}is ${schoolage}`)