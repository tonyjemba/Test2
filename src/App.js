import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Chat from "./pages/Chat";
import RegisterUser from "./pages/RegisterUser";

function App() {
 
  const user = useSelector((state) => state.registeredUser.userName);
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/" element={<RegisterUser />} />

          <Route
            path="/chat"
            element={user === "" ? <Navigate replace to="/" /> : <Chat />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
