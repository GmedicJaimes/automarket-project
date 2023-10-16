import { Route, Routes } from "react-router";
import "./App.css";

import Home from "./views/Home";
import Contact from "./views/Contact";
import Services from "./views/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Informe from "./views/Informe";
import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <Navbar />
      <Buttons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars" element={<Services />} />
        <Route path="/informe" element={<Informe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
