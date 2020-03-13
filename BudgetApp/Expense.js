export default class Expense
{
    constructor(id,budget=0,expenseTitle='',expenseValue=0,balance=0)
    {
        this.id=id;
        this.budget=budget;
        this.expenseTitle=expenseTitle;
        this.expenseValue=expenseValue;
        this.balance=balance;
    }
}