const express =require('express');
const my_business_logic=require('./service/my_business_logic');
const app=express();
const port=2500;
//GET

app.get('/greetings',(request,response)=>{
    return response.send({msg:"hello lenah"})
})
//list of friends
let friends=[
    {"id":1,"name":"joy"},
    {"id":2,"name":"Godwin"},
    {"id":3,"name":"emma"},
    {"id":4,"name":"aretha"},
    {"id":5,"name":"arthur"},
    
]
app.get('/friends',(request,response)=>{
    return response.send({friends})
})

//list of friends

app.get('/list-of-student-by-id/:id',(request,response)=>{
    console.log("logging request params",request.params);
    //console.log("students names",request.studentid);
    return response .send(my_business_logic.getstudent())


})

//list id, accessno, studentname

app.get('/student-by-id/:id',(request,response)=>{
    console.log("logging request params",request.params);
    // console.log("students names",request.studentid);
    //console.log
    return response.status (200).send (my_business_logic.getstudentbyid(request()))
});





app.listen(port,()=>{
    console.log('example app listening at http://localhost:2500')
});



// urm response.status(400).send("found nothing");
//post
app.post('/sign-up',(request,response)=>{
    console.log("logging request body",request.body);
    return response.status (200).send ()


})

