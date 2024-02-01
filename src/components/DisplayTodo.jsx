import { useSelector } from "react-redux";
import Todo from "./Todo";
import { Link } from "react-router-dom";
import "./component.css"

function DisplayTodo() {
  const todo = useSelector((state) => state.todo);

  return (
    <div className="create-wrapper todo-wrapper for-margin">
      
      {todo.length!==0 ? (
        <div className="margin">
          
          {todo.map((tobedone) => {
            return <Todo tobedone={tobedone} key={tobedone.id} />;
          })}
        </div>
      ) : (
        <div className="no-tasks">No Tasks Pending</div>
      )}
<div className="full-wid">
      <Link to="/create" className="color-btn align-self">Create New Task</Link></div>
    </div>
  );
}
export default DisplayTodo;
