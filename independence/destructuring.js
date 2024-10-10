//a destructuring object
let school={
    schoolname:"name",
    schoollocation:"location",
    studentsCount:"studentsCount",

};
let{schoolname,schoollocation, studentsCount}=school;
console.log.apply(`the school${schoolname}and ${schoollocation}having the ${studentsCount}.`);
