const express=require("express");
const app=express();
const path=require('path');
const port=3000;
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./data.json'));
})
app.listen(port,()=>{
    console.log('server is running');
})