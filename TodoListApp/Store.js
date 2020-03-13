export default class Store
{
    static getItem()
    {
        let items;
        if(localStorage.getItem('todoList')===null)
        {
            items=[];
        }
        else
        {
            items=JSON.parse(localStorage.getItem('todoList'));
        }
        return items;
    }
    static addItem(todoItem)
    {
        const getItems=Store.getItem();
        getItems.push(todoItem);
        console.log(getItems)
        localStorage.setItem('todoList',JSON.stringify(getItems));

    }
    static removeItem(getId)
    {
        const getItem=Store.getItem();
        console.log(getItem)
        getItem.forEach((item,index) => {
            console.log(item,item.id,getId)
            if(item.id==getId)
            {
                getItem.splice(index,1);
            }
        });
        localStorage.setItem('todoList',JSON.stringify(getItem));
    }
    static clear()
    {
        const getItem=Store.getItem();
        while(getItem.length)
        {
            getItem.pop();
        }
        console.log(getItem)
        localStorage.setItem('todoList',JSON.stringify(getItem));
    }
}