// Book class :represent book
class Book{
    constructor(title,author,isbn)
    {
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }

}

//Ui class hanlde ui
class Ui{

    static displayBooks()
    {
        console.log('asfdsafad')
        const StoreBooks=Store.getBooks();
        // [
        //     {
        //         title:'book one',
        //         author:'tarek',
        //         isbn:'324342'
        //     },
        //     {
        //         title:'book two',
        //         author:'rosy',
        //         isbn:'2343234'
        //     }
        // ];
        const books=StoreBooks;
        books.forEach((book)=> Ui.addBookToList(book));
    }
    static addBookToList(book)
    {
        const list=document.querySelector('#book-list');
        const tr=document.createElement('tr');
        tr.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(tr);
        console.log(list);
        
    }
    static deleteBook(target)
    {
        if(target.classList.contains('delete'))
        target.parentElement.parentElement.remove();
    }

    static showAlert(messege,className)
    {
        const div=document.createElement('div');
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(messege));
        const container=document.querySelector('.container');
        const form =document.querySelector('#book-form');
        container.insertBefore(div,form);

        //vanish in 3 sec
        setTimeout(()=> document.querySelector('.alert').remove(),3000);
    }
    
    static clearField()
        {
            document.querySelector('#title').value='';
            document.querySelector('#author').value='';
            document.querySelector('#isbn').value='';
        }
}
//store class
class Store
{
   static getBooks()
    {
        let books;
        if(localStorage.getItem('books')===null)
        {
            books=[];
        }
        else{
            books=JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
   static addBook(book)
    {
        const books=Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }
    
    static removeBook(isbn,index)
    {
        const books=Store.getBooks();
        books.forEach((book)=>
        {
            if(book.isbn===isbn)
            {
                books.splice(index,1);     
            }
        });
        localStorage.setItem('books',JSON.stringify(books));
    }
}



//event:display boook
document.addEventListener('DOMContentLoaded',Ui.displayBooks);
//eevnt add a book

document.querySelector('#book-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const isbn=document.querySelector('#isbn').value;

    //instantiate book]
    if(title===''||author===''||isbn==='')
    {
        Ui.showAlert('plase fill all field','danger');
    }
    else{
        const book=new Book(title,author,isbn);
      Ui.addBookToList(book)
        //add book to store
        Store.addBook(book);

      //success messge
        Ui.showAlert('Book Added','success')

      //clear field
       Ui.clearField();
    }
    

})


//event remove book
document.querySelector('#book-list').addEventListener('click',(e)=>
{
    Ui.deleteBook(e.target);

    //remove boik feom store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent); 

    //remove messge
    Ui.showAlert('Book Removed','success')
})