import "./component.css";
import { Link } from "react-router-dom";
function Home(){
    
    return(
        <div className="home-wrapper dynamic-background">
            <div className="home-chota-wrapper">
            <h1 className="home-heading">WELCOME TO TASK TRACKER !!</h1>
            <Link className="home-link" to="/create">Create New Task</Link>
            <br></br>
            <Link className="home-link" to="/display">View all Tasks</Link>
        </div>
        </div>
    );
}
export default Home;