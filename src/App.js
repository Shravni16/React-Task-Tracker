import { Route } from "react-router-dom";
import Home from "./components/Home";
import { Routes } from "react-router-dom";
import CreateTodo from "./components/CreateTodo";
import DisplayTodo from "./components/DisplayTodo";
function App() {
  return (
   <Routes >
    <Route path="/" element={<Home/>}></Route>
    <Route path="/create" element={<CreateTodo/>}></Route>
    <Route path="/display" element={<DisplayTodo/>}></Route>
   </Routes>
  );
}

export default App;
