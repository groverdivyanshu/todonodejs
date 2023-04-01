Tasktodelete=[];

document.addEventListener('click',handler);

function handler(event)
{
    const ID=event.target.id;
    console.log(event.target.className);
    console.log(ID);
 if(event.target.className==="custom-checkbox")
 {

    toogle(ID);
 }
 else if(event.target.className==="delete")
 {
    event.preventDefault();
    console.log("coming");
    if(Tasktodelete.length>0)
    {
    deletetask(Tasktodelete);
    }
    else{
        alert("No task to delete");
    }
 }
}

const deletetask=async (task)=>{

    const result=await fetch('/delete-todo',{
    method: 'POST',
  headers: {
     "Content-type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify({
    tasks:task
}),
 
})
if(result)
{
  alert("Task has been complted");
  window.location.reload();
}

}




function toogle(taskid){

  console.log(Tasktodelete);
if(Tasktodelete.includes(taskid))
{
    const newtask=Tasktodelete.filter((elem)=>elem!==Number(taskid));
    
    Tasktodelete=newtask;

}
else{
    Tasktodelete.push(taskid);
   
}
}

