import AddTodo from "./components/AddTodo";
import WelcomeMessage from "./components/WelcomeMessage";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "2/10/2024",
    },

    {
      name: "Go To College",
      dueDate: "2/10/2024",
    },
    {
      name: "Go To Home",
      dueDate: "right now",
    },
  ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);

    setTodoItems(newTodoItems);
  };
  return (
    <center classnamenamenamenameName="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length == 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
