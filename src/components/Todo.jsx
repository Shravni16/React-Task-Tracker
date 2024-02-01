import { useDispatch, useSelector } from "react-redux";
import { remove, update } from "../redux/Slices/todoSlice";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Todo(props) {
  const data = useSelector((state) => state.todo);
  const tobedone = props.tobedone;
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const [upTask, setUpTask] = useState(tobedone.task);
  const [upTick, setUpTick] = useState(tobedone.compeleted);
  const [upDesc,setUpDesc]=useState(tobedone.description);


   function changeHandler(event) {
    setUpTick(!upTick);
    const updatedObj = {
      id: tobedone.id,
      task:tobedone.task ,
      description:tobedone.description,
      date:tobedone.date,
      compeleted:!tobedone.compeleted,
    };
    dispatch(update(updatedObj));
    
    console.log(updatedObj);
  }

  function deleteHandler() {
    dispatch(remove(tobedone.id));
    toast.error('Task Removed');

    console.log(data);
  }

  function editHandler() {
    setEdit(true);
  }
  
  function descChangeHandler(event){
    setUpDesc(event.target.value);
  }


  function doneEditHandler() {
    const updatedObj={
        id: tobedone.id,
      task: upTask,
      description:upDesc,
      date:tobedone.date,
      compeleted:tobedone.compeleted,

    };
    
    setEdit(false);

    console.log(updatedObj);
  }
  function inputEditHandler(event){
    setUpTask(event.target.value);

    
  }

  return (
    <div className="create-wrapper todo">
      
      <input className="colored-checkbox "
        name="tick"
        type="checkbox"
        checked={upTick}
        onChange={changeHandler}
      ></input>
      {edit ? (
        <div className="hor-flex">
          <div >
          <label htmlFor="upTask">Title:</label>
          <input
          id="upTask"
            name="upTask"
            type="text"
            value={upTask}
            onChange={inputEditHandler}
          ></input>
           </div>

           <div > 
          <label htmlFor="upDesc">Description</label> 
          <input id="upDesc"type="text" name="upDesc" value={upDesc} onChange={descChangeHandler}>
          </input>
          </div>

          <button onClick={doneEditHandler} className="done-btn">Done</button>
        </div>
      ) : (<div className="hr-flex">
        <div className="title-desc">
          <h4 className="heading-title">{upTask}</h4>
          <p className="no-margin-no-padding">{upDesc}</p>
          
          </div><p className="no-margin-no-padding">{tobedone.date}</p>
      </div>
      )}
  <div className="del-ed">
      <CiEdit onClick={editHandler} />
      <button onClick={deleteHandler} className="del-btn">Delete</button></div>
    </div>
  );
}
export default Todo;
