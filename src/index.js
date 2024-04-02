const express= require("express");
const {PORT}=require("./config/serverConfig.js")
const setupAndStartServer=async()=>{

    const app=express();
    
    app.listen(PORT,()=>{
        console.log(` server is running on ${PORT}`);
    })
}

setupAndStartServer();