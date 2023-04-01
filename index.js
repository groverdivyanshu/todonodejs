const express=require('express');
const path=require('path')
const port=8000;
const app=express();
const db=require('./config/mongoose'); 
//user express router

app.use(express.static('./assets'))
app.use(express.urlencoded());
app.use(express.json());

app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routers'));
app.listen(port,function(err){
    if(err)
    {
        console.log(`Error is coming ${err}`);
    }
    console.log(`The serve is running up ${port}`);
})
