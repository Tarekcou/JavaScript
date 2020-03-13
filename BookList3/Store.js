export default class Store
{
   static getBook()
    {
        let getBooks;
        if(localStorage.getItem('book')===null)
        {
            getBooks=[];
        }
        else
        {
            getBooks=JSON.parse(localStorage.getItem('book'));
        }
        return getBooks;
    }
   static addBook(book)
    {
        const booksList=Store.getBook();
        booksList.push(book);
        localStorage.setItem('book',JSON.stringify(booksList));

    }
    static removeBook(bookNo)
    {
        const getBook=Store.getBook();
        getBook.forEach((book,index) => {
            if(book.bookNo==bookNo)
            {
                getBook.splice(index,1);
            }
        });
        localStorage.setItem('book',JSON.stringify(getBook));

    }
}