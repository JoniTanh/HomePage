import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
