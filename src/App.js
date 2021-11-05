import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 43.11,
            date: new Date(2021, 8, 2),
        },
        {
            id: "e2",
            title: "NetFlix",
            amount: 253.22,
            date: new Date(2021, 9, 15),
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 11, 4),
        },
        {
            id: "e4",
            title: "Shibu coin",
            amount: 8437.22,
            date: new Date(2021, 11, 5),
        },
    ]

  return (
      <div>
        <h2>Let's get started!</h2>
          <ExpenseItem
              title={expenses[0].title}
              amount={expenses[0].amount}
              date={expenses[0].date}
          ></ExpenseItem>

          <ExpenseItem
              title={expenses[1].title}
              amount={expenses[1].amount}
              date={expenses[1].date}
          ></ExpenseItem>
          <ExpenseItem
              title={expenses[2].title}
              amount={expenses[2].amount}
              date={expenses[2].date}
          ></ExpenseItem>
          <ExpenseItem
              title={expenses[3].title}
              amount={expenses[3].amount}
              date={expenses[3].date}
          ></ExpenseItem>
      </div>
  );
}

export default App;
