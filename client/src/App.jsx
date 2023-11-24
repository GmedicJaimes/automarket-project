import { Route, Routes } from "react-router";
import "./App.css";

import Home from "./views/Home";
import Contact from "./views/Contact";
import Catalogo from "./views/Catalogo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./views/Services";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars" element={<Catalogo />} />
        <Route path="/informe" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
