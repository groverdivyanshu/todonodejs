const express=require('express');

const router=express.Router();
const usercontroller=require("../controllers/todolist");
const displaycontroller=require("../controllers/displaycontroller");
const deletecontroller=require("../controllers/deletecontroller");

router.get('/',usercontroller.todolist);
router.post('/create',displaycontroller.createtodolist);
router.post('/delete-todo',deletecontroller.deletetodolist);

module.exports=router;