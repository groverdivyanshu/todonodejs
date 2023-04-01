const Todo=require('../models/todolist');

const express=require('express');
const mongoose=require('mongoose');
//display todo list
module.exports.createtodolist= async function(req,res)
{
   try{
      

   const todo=await Todo.create({
   description:req.body.description,
 category:req.body.category,

 date:req.body.date

});
if(todo)
{
   return res.redirect('back');

   }
}
catch(err)
{
   console.log("Error is comimg",err);
}
}
   