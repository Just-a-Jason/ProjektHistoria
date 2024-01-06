import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";
import Temat1 from "./Pages/Temat1";
import Temat2 from "./Pages/Temat2";
import Temat3 from "./Pages/Temat3";
import Temat4 from "./Pages/Temat4";
import Temat5 from "./Pages/Temat5";
import Temat6 from "./Pages/Temat6";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Temat1" element={<Temat1 />} />
        <Route path="/Temat2" element={<Temat2 />} />
        <Route path="/Temat3" element={<Temat3 />} />
        <Route path="/Temat4" element={<Temat4 />} />
        <Route path="/Temat5" element={<Temat5 />} />
        <Route path="/Temat6" element={<Temat6 />} />
      </Routes>
    </>
  );
}

export default App;
