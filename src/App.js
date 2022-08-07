import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import RegisterUser from "./pages/RegisterUser";

function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/" element={<RegisterUser />} />

          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
