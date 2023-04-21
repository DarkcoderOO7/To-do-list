function addtolist()
{
    var taskname=document.getElementById('taskname').value
    var tododiv= document.getElementById('mytodo')

    var newtodoitm= document.createElement('div')
    var todoname= document.createElement('li')

    todoname.innerHTML=taskname
    
    var dltbtn=document.createElement('i')
    dltbtn.classList.add('far')
    dltbtn.classList.add('fa-trash-alt')
    newtodoitm.appendChild(todoname)
    newtodoitm.appendChild(dltbtn)

    tododiv.appendChild(newtodoitm)
    console.log(taskname)
    taskname=""
    

}


var tododiv= document.getElementById('mytodo')
tododiv.addEventListener('click',del)
function del(e)
{
  const element = e.target
  if(element.classList[0]=='far')
  {
    element.parentElement.remove()
  }
}


















