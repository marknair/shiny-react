import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        { title: "Car Insurance", amount: 294.67, date: new Date(2021, 11, 4)},

    ]

  return (
      <div>
        <h2>Let's get started!</h2>
          <ExpenseItem></ExpenseItem>
          <ExpenseItem></ExpenseItem>
          <ExpenseItem></ExpenseItem>
          <ExpenseItem></ExpenseItem>
      </div>
  );
}

export default App;
