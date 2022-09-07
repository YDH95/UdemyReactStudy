//import ExpenseItem from "./components/ExpenseItem";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expense = [
    {
      title: "test1",
      amount: 213,
      date: new Date(2022, 9, 23),
    },
    {
      title: "test2",
      amount: 213,
      date: new Date(2022, 9, 23),
    },
    {
      title: "test3",
      amount: 213,
      date: new Date(2022, 10, 23),
    },
    {
      title: "test4",
      amount: 213,
      date: new Date(2022, 9, 23),
    },
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      <ExpenseList items = {expense}></ExpenseList>
    </div>
  );
}

export default App;
