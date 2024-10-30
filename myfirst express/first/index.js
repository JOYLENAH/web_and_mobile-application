const express =require('express');
const app=express();
const port=2500;
//GET

app.get('/greetings',(request,response)=>{
    return response.send({msg:"hello lenah"})
})



app.listen(port,()=>{
    console.log('example app listening at http://localhost:2500')
});


