import { BiMessageAdd } from "react-icons/bi";
import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div classnamenamenamenameName="container">
      <div classnamenamenamenameName="row kg-row">
        <div classnamenamenamenameName="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div classnamenamenamenameName="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div classnamenamenamenameName="col-2">
          <button
            type="button"
            classnamenamenamenameName="btn btn-outline-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
