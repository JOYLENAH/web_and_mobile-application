let univeristy={
    name:"uganda christain university",
    departments:[
    {department:"computing",headofdepartment:"Aretha"},
    {department:"engineering",headofdepartment:"Arther"},
    {department:"medicine",headofdepartment:"lucky"}

]

};
console.log(`Departments of university:`);
university.departments.forEach((department) => {
  console.log(`${department.department} - Head: ${department.headOfDepartment}`);
});