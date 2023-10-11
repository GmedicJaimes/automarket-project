import Home from "./views/Home";
import Contact from "./views/Contact";
import Cars from "./views/Cars";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </>
  );
}

export default App;
