const Todo=require('../models/todolist');

const express=require('express');
const mongoose=require('mongoose');
//use for delete todolist
module.exports.deletetodolist= async function(req,res)
{
try{
   const tasks=(req.body.tasks);
   console.log(tasks);
   for(let i of tasks)
   {
      console.log(i);
await Todo.findByIdAndDelete({_id:i})
}
return res.redirect('back');
}
catch(err)
{
   console.log("Error is coming",err);
}

}


