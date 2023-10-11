import Home from "./views/Home";
import Contact from "./views/Contact";
import Cars from "./views/Cars";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      {/* <Routes>
        <Route></Route>
      </Routes> */}
      <Navbar />
      <Home />
      <Contact />
      <Cars />
    </>
  );
}

export default App;
