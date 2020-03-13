import UI from './UI.js';
import Expense from './Expense.js';
import Store from './Store.js'
const btnCalculate = document.querySelector('.btnCalculate');
const btnExpense = document.querySelector('#btnExpense');
const budget = document.querySelector('#budget');
const expenseTitle = document.querySelector('#expenseTitle');
const expense = document.querySelector('#expense');

const budgetForm = document.querySelector('#budgetForm');
const expenseForm=document.querySelector('.expenseForm')

const budgetMoney = document.querySelector('#budgetMoney');
const expenseMoney = document.querySelector('#expenseMoney');
const balanceMoney = document.querySelector('#balanceMoney');

 //localStorage.clear()

document.addEventListener('DOMContentLoaded',UI.displayExpense)
console.log(typeof expenseForm)
budgetForm.addEventListener('submit', budgetFunction)
btnCalculate.addEventListener('click', budgetFunction);
let id=0;
function budgetFunction(e) {
    e.preventDefault();
    console.log(budget.value)
    if (budget.value != null && budget.value > 0) {
        const expenseTitleText = expenseTitle.value;
        const expenseText = expense.value;

        //budgetMoney.innerHTML = budget.value;

        const expenseClass = new Expense(id,budget.value, expenseTitleText, expenseText, 0);
        UI.calculateBalance(expenseClass);
        budget.value = '';
        console.log(budgetMoney.innerHTML)
        if(budgetMoney.textContent!='')
        {
            Store.budgetUpdate(budgetMoney.textContent);
        }
        
    }
    else {
        const alert = document.createElement('p');
        alert.className = 'alert alert-danger';
        alert.innerHTML = 'please inter value input';
        budgetForm.insertBefore(alert, budgetForm.childNodes[1]);
        setTimeout(() => {
            budgetForm.removeChild(alert)
        }, 2000);

    }

}

expenseForm.addEventListener('submit', expenseFunction);

btnExpense.addEventListener('click', expenseFunction);
function expenseFunction() {
    const expenseTitleText = expenseTitle.value;
    const expenseText = expense.value;
    const expenseClass = new Expense(id++,budget.value, expenseTitleText, expenseText,0);
    if (expenseTitleText === '' && expenseText === '') {
        const alert = document.createElement('p');
        alert.className = 'alert alert-danger';
        alert.innerHTML = 'please fill up form';
        budgetForm.insertBefore(alert, budgetForm.childNodes[1]);
        setTimeout(() => {
            budgetForm.removeChild(alert)
        }, 2000);
    }
    else {
        UI.addExpense(expenseClass);
        UI.calculateBalance(expenseClass);
        
        //const exp=new Expense(expenseClass)
        Store.addExpense(expenseClass);
        expenseTitle.value = ''
        expense.value = ''
    }

}
