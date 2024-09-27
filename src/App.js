import logo from "./logo.svg";
import Contact from "./components/Contact";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Line from "./components/Line";

function App() {
  return (
    <Router>
      <div className="bg-background">
        <NavBar className="p-4" />
        <div className="flex justify-center pt-2 pb-12">
          <Line length="95%" />
        </div>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route></Route>
          <Route></Route>
        </Routes>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
