import "./App.css";
// TODO Router
import { Routes, Route } from "react-router-dom";

// TODO Components
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";

// TODO Pages
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
