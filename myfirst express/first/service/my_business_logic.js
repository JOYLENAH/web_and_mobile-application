const mydib=require('../models/my_dib');
// function getting all students
const getstudent=()=>{
    return mydib
}

//this function is getting student id
const getstudentbyID=(request)=>{
    for (i=0;i<9;i++){
        
        if(request.params.id==Student[i].id){
            return response.send(student[i]);};
        
        console.log(Student[i]);
        }

        return null
    
};


module.exports= {getstudent, getstudentbyID}
    
