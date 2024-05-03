import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div classnamenamenamenameName={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          TodoDate={item.dueDate}
          TodoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
