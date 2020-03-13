import TodoList from './TodoList.js'
import Store from './Store.js';
let listArray = [];

export default class UI {
    constructor() {

    }

    static displayItem() {
        const getItem = Store.getItem();
        getItem.forEach(item => {
            UI.addItem(item);
        });
    }

    static addItem(item) {

        listArray.slice(item.id,0,item);
        const listGroup = document.querySelector('.list-group');

        const li = document.createElement('li');
        const itemName = item.TodoListName;
        li.className = 'list-group-item listItem txt';

        const checkImage = document.createElement('i');
        checkImage.id = `${item.id}`;
        checkImage.style.color = 'brown';
        checkImage.className = 'far fa-check-circle fa-lg checkItem mr-2';
        li.appendChild(checkImage)

        li.appendChild(document.createTextNode(itemName));
        // const p=document.createElement('h4');
        // p.innerText=itemName;
        // p.className='txt';
        // li.appendChild(p);
        console.log(li)
        if (item.isCompleted === true) {
            checkImage.className = 'fas fa-check-circle fa-lg checkItem mr-2';
           li.style.textDecoration='line-through';
        }
        // else {
        //     checkImage.className = `far fa-check-circle fa-lg checkItem mr-2`;
        //     li.appendChild(document.createTextNode(itemName));

        // }
    
        const deleteImage = document.createElement('i');
        deleteImage.id = `dlt`;
        deleteImage.className = `fas fa-trash-alt fa-lg float-right `;
        li.appendChild(deleteImage);
        listGroup.appendChild(li);


        checkImage.addEventListener('click', (e) => {
            this.checkItem(e.target)
        })


        const dlt = document.querySelectorAll('#dlt');
        //console.log(dlt);
        dlt.forEach(element => {

            element.addEventListener('click', (e) => {
                e.target.parentElement.remove();
                Store.removeItem(e.target.previousElementSibling.id);

            })
        })


    }

    static checkItem(target) {
        const listArray = Store.getItem();
        console.log(listArray);
        const txt=document.querySelector('.txt');


        const b = listArray[target.id].isCompleted;
        if (!b) {
            target.className = 'fas fa-check-circle fa-lg checkItem mr-2';

            listArray[target.id].isCompleted = true;
            target.parentElement.style.textDecoration='line-through';

            localStorage.setItem('todoList', JSON.stringify(listArray));

        }
        else {

            target.className = 'far fa-check-circle fa-lg checkItem mr-2';
            listArray[target.id].isCompleted = false;
            target.parentElement.style.textDecoration='';


            localStorage.setItem('todoList', JSON.stringify(listArray));


        }
    }
    static clear() {
        const listGroup = document.querySelector('.list-group');
        listGroup.innerHTML = '';
        console.log(listGroup)

    }
    static add() {
        let listArray = [];
    }


}