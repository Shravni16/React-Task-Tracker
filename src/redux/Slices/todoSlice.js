import { createSlice } from "@reduxjs/toolkit"




const initialState={
    todo:[]
}

export const todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{
        add:(state=initialState,action)=>{
            state.todo.push(action.payload);
            // state.todo=[...state.todo,action.payload];

        },
        remove:(state,action)=>{
            state.todo=state.todo.filter((todo)=>(todo.id!==action.payload));

        },
        update:(state,action)=>{
          const updatedTodo=action.payload;
          const index=state.todo.findIndex((todo)=>todo.id===updatedTodo.id);
         
            state.todo[index]=updatedTodo;
         
        }
    }
})

export const {add,remove,update}=todoSlice.actions;
export default todoSlice.reducer;