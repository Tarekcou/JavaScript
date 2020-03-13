import UI from './UI.js';
import TodoList from './TodoList.js'
import Store from './Store.js';
const date=document.querySelector('#date');
const refresh=document.querySelector('#refresh');
const input=document.querySelector('#addTask');
const add=document.querySelector('#add');
const d=new Date();
date.innerHTML=`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
console.log(d.getDate())

let id=0;
let listArray=[];
document.addEventListener('DOMContentLoaded',UI.displayItem)
input.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(add.value!=null)
    {
        const todoItem=new TodoList(add.value,false,id);
        listArray.push(todoItem);
        id++;
      
        UI.addItem(todoItem);
        Store.addItem(todoItem);
        
       document.querySelector('#add').value='';
    }
    else
    {
        alert('field empty');
    }
    
});
refresh.addEventListener('click',(e)=>
{
    UI.clear();
    Store.clear();
})

 
