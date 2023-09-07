import "./App.css";
import { CreateTaskPage } from "./pages/CreateTaskPage";
import { TaskListPage } from "./pages/TaskListPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={TaskListPage}/>
          <Route path="/create" exact Component={CreateTaskPage}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
