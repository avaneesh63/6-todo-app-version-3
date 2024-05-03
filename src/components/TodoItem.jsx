import { MdDelete } from "react-icons/md";

function TodoItem({ TodoName, TodoDate, onDeleteClick }) {
  return (
    <div classnamenamenamenameName="container">
      <div classnamenamenamenameName="row kg-row">
        <div classnamenamenamenameName="col-6">{TodoName}</div>
        <div classnamenamenamenameName="col-4">{TodoDate}</div>
        <div classnamenamenamenameName="col-2">
          <button
            type="button"
            classnamenamenamenameName="btn btn-outline-danger kg-button"
            onClick={() => onDeleteClick(TodoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
