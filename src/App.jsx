import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/index.jsx";
import Activity from "./pages/Activity.jsx";
import Experience from "./pages/Experience.jsx";
import Education from "./pages/Education.jsx";
import Biodata from "./pages/Biodata.jsx";
import Interests from "./pages/Interests.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/biodata" element={<Biodata />} />
      </Routes>
    </Router>
  );
}

export default App;
