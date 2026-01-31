import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Navbar from "./Navbar";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}/>
      </Routes>
    </>
  );
}

export default App;
