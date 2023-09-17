import Dashboard from "@pages/Dashboard";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Profile from "@pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@molecules/fontawesome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
