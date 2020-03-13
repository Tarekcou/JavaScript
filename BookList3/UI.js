import Store from "./Store.js";

export default class UI
{
   static displayBook()
    {
       

        const getBook=Store.getBook();
        getBook.forEach(book=>{
            UI.addBook(book);
        });
       
    }
    
   static addBook(book)
    {
       
        const tableList=document.querySelector('.table-body');
        const tr=document.createElement('tr');
        const td1=document.createElement('td');
        const td2=document.createElement('td');
        const td3=document.createElement('td');
        const dlt=document.createElement("td");
        const cross=document.createElement('i');
        cross.className="btn btn-danger btn-sm delete";
        cross.innerText="x";
        dlt.appendChild(cross);
        
       
        td1.innerText=book.title;
        td2.innerText=book.author;
        td3.innerText=book.bookNo;
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(dlt);
        tableList.appendChild(tr);
        console.log(dlt.parentElement);
        dlt.addEventListener("click",(e)=>
        {
            e.target.parentElement.parentElement.remove();
            Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
            UI.message("One Item deleted",'danger');

            
        });

    }
   static message(message,messageType)
    {
       const alert= document.createElement('div');
       const form=document.querySelector('.form');
       const container=document.querySelector('.container');
       alert.className=`alert alert-${messageType}`;
       alert.textContent=message;
       console.log(alert);
       container.insertBefore(alert,form);
       setTimeout(()=>{
        alert.remove();
       },2000);
       

    }
}