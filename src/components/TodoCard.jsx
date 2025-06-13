import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

function TodoCard({ edit, deleteTodo, list, index, time }) {
  function handleToucheMove() {
    console.log("Touch move detected");
  }
  return (
    <li onTouchMove={() => handleToucheMove()} className="todoItem">
      {list} {/* Display individual task */}
      <div className="actionsContainer">
        <button onClick={() => edit(index)}>
          <CiEdit id="edit" />
        </button>
        <button onClick={() => deleteTodo(index)}>
          <MdDeleteOutline id="delete" />
        </button>
      </div>
      <span className="time">{time}</span>
    </li>
  );
}

export default TodoCard;
