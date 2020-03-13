import Expense from './Expense.js'
import Store from './Store.js';
const budgetMoney = document.querySelector('#budgetMoney');
const expenseMoney = document.querySelector('#expenseMoney');

const balanceMoney = document.querySelector('#balanceMoney');
//const exp=[];
let expValue = 0;
let bgt = 0, exp = 0, bl = 0;
export default class UI {
    static displayExpense()
    {
        const exp=Store.getExpense();
        console.log(exp)
        exp.forEach(expense => {
            UI.calculateBalance(expense);
            UI.addExpense(expense)
        });
       
    }
    static calculateBalance(expense) {

        if (expense.budget != '' || expense.expenseValue != '') {
            if (expense.budget != '')
                bgt = parseInt(expense.budget);
            else
                bgt = parseInt(budgetMoney.textContent);
            if (expense.expenseValue != '') {
                console.log(parseInt(expense.expenseValue))
                console.log(exp)
                exp += parseInt(expense.expenseValue);
            }
            else {
                exp = parseInt(expenseMoney.textContent);
            }
            expenseMoney.innerHTML = exp;
            budgetMoney.innerHTML = bgt;
            const v = parseInt(bgt) - parseInt(exp);
            balanceMoney.innerHTML = v;
            expense.balance=v;
            expense.budget=bgt;
        }


    }
    static addExpense(expense) {
        const tableBody = document.querySelector('.table-body');
        const tr = document.createElement('tr');
        const tdTitle=document.createElement('td');
        const tdExpense=document.createElement('td');
        const tdImg=document.createElement('td');
        const imageEdit=document.createElement('i');
        const imageDlt=document.createElement('i');

        tdTitle.style.color='firebrick';
        tdTitle.innerText=expense.expenseTitle;

        tdExpense.style.color='firebrick';
        tdExpense.innerText=expense.expenseValue;

        imageEdit.className='fas fa-edit';
        imageEdit.id='edit';

        imageDlt.className='fas fa-trash';
        imageDlt.style.paddingLeft='5px';
        imageDlt.id='dlt';

        tdImg.appendChild(imageEdit);
        tdImg.appendChild(imageDlt);

        tr.appendChild(tdTitle);
        tr.appendChild(tdExpense);
        tr.appendChild(tdImg);
        tr.setAttribute('job',expense.id);
        console.log(tr)


        //     tr.innerHTML =
    //         ` <td style="color: firebrick;">${expense.expenseTitle}</td>
    //    <td style="color: firebrick;">${expense.expenseValue}</td>
    //    <td >
    //        <i id="edit" class="fas fa-edit"></i>
    //        <i id="dlt" style="padding-left: 5px;" class="fas fa-trash"></i>
    //    </td>`;
        tableBody.appendChild(tr);

        //const edit = document.querySelector('#edit');
        imageEdit.addEventListener('click',(e)=>
        {
            UI.edit(e.target);
        })
       
        imageDlt.addEventListener('click',(e)=>
        {
            UI.delete(e.target);
        })
      

    }
    static edit(target) {
       // console.log(target.parentElement.previousElementSibling)
        const title = target.parentElement.parentElement.firstElementChild.textContent;

        const exp = target.parentElement.previousElementSibling.textContent;
       // console.log(exp)
        document.querySelector('#expenseTitle').value = title;

        document.querySelector('#expense').value = exp;
        target.parentElement.parentElement.remove();
        const expenseClass = new Expense(target.parentElement.parentElement.getAttribute('job'),0, title, -exp, 0);
        UI.calculateBalance(expenseClass)
        console.log(target.parentElement.parentElement.getAttribute('job'))
        Store.removeExpense(target.parentElement.parentElement.getAttribute('job'));
    }
    static delete(target)
    {
        target.parentElement.parentElement.remove();
        target.parentElement.parentElement.remove();
        const title = target.parentElement.parentElement.firstElementChild.textContent;

        const exp = target.parentElement.previousElementSibling.textContent;
        const expenseClass = new Expense(target.parentElement.parentElement.getAttribute('job'),0, title, -exp, 0);
        UI.calculateBalance(expenseClass)
        console.log(target.parentElement.parentElement.getAttribute('job'))
        Store.removeExpense(target.parentElement.parentElement.getAttribute('job'));
    }
}