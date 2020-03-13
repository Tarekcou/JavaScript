export default class Store
{
    static getExpense(expense)
    {
        let exp;
        if(localStorage.getItem('expense')===null)
        {
            exp=[];
        }
        else
        {
            exp=JSON.parse(localStorage.getItem('expense'));
        }
        return exp;
    }
    static addExpense(expense)
    {   const exp=Store.getExpense(expense);
        exp.push(expense);
        localStorage.setItem('expense',JSON.stringify(exp));
        console.log(JSON.stringify(exp))
    }
    static removeExpense(id)
    {
        const exp=Store.getExpense();
        exp.forEach((expense,index) => {
            if(expense.id==id)
            {
                console.log('hi')

                exp.splice(index,1);
            }
        });
        console.log(exp)
        localStorage.setItem('expense',JSON.stringify(exp));

    }
    static budgetUpdate(value)
    {
        const exp=Store.getExpense();
        exp.forEach((expense,index) => {
           expense.budget=value;
        });
        console.log(exp)
        localStorage.setItem('expense',JSON.stringify(exp));
    }
}