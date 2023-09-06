import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
