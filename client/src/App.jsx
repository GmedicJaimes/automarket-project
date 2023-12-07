import { Route, Routes } from "react-router";
import "./App.css";

import Home from "./views/Home/Home";
import Contact from "./views/Contacto/Contact";
import Catalogo from "./views/Catalogo/Catalogo";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Services from "./views/Services/Services";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/car-shop" element={<Catalogo />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
