import UI from "./UI.js";
import Book from "./Book.js"
import Store from "./Store.js";
document.addEventListener("DOMContentLoaded",UI.displayBook);
let i=0;
document.querySelector(".form").addEventListener('submit',(e)=>
{
    i++;
    e.preventDefault();
    const title=document.querySelector('.title').value;
    const author=document.querySelector('.author').value;
    const bookNo=document.querySelector('.bookNo').value;
    const tableList=document.querySelector('.table-body');

    const book=new Book(title,author,bookNo);
    console.log(book,i);
    if(title===''||author===''||bookNo==='')
    {
        UI.message('Please fill up the form','info');
    }
    else
    {
        UI.addBook(book);
        Store.addBook(book);
        i++;
        UI.message("One Item Added","success");
        document.querySelector('.title').value='';
        document.querySelector('.author').value='';
        document.querySelector('.bookNo').value='';
    }
    
    



});
