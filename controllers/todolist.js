const Todo=require('../models/todolist');

const express=require('express');
const mongoose=require('mongoose');

module.exports.todolist= async function(req,res)
{
   const todolist=await Todo.find({});
      if(todolist)
   {
      return res.render('todo',{
         title:"todo list app",
         todo_list:todolist
   })
}
}

