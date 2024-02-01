import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/Slices/todoSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function CreateTodo() {
  const dispatch = useDispatch();

  const [todoInp, setTodoInp] = useState("");
  const [desc, setDesc] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    const insertTodoObj = {
      id: nanoid(),
      task: todoInp,
      description: desc,
      date: new Date().toLocaleDateString(),
      compeleted: false,
    };
    setTodoInp("");
    setDesc("");
    dispatch(add(insertTodoObj));
    toast.success("Task Created");
    console.log(insertTodoObj);
  }

  function changeHandler(event) {
    setTodoInp(event.target.value);
  }
  function descChange(event) {
    setDesc(event.target.value);
  }

  return (
    <div className="home-wrapper create-wrapper">
      <div className="home-chota-wrapper">
        <form onSubmit={submitHandler}>
            <div className="create-form">
            
          <label className="title-label" htmlFor="title">Enter Your Task : </label>
          <input className="title-inp"
          required
            type="text"
            id="title"
            onChange={changeHandler}
            value={todoInp}
          ></input>
         
         
        
          <label className="normal-label" htmlFor="desc">Enter Description : </label>
          <input className="normal-inp"
          required
            id="desc"
            type="text"
            onChange={descChange}
            value={desc}
          ></input>
          

          <button className="submit" type="submit">Submit</button>
          </div>
        </form>
        
        <Link to="/display" className="color-btn"> View Tasks</Link>
      </div>
    </div>
  );
}
export default CreateTodo;
