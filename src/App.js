import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>this is about page</h1>} />
          <Route path="/store" element={<h1>this is store page</h1>} />
          <Route path="/gmail" element={<h1>this is gmail page</h1>} />
          <Route path="/images" element={<h1>this is images page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
