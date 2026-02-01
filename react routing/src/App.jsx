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
        <Route path="/*" element={<h1>page not found</h1>}/>
      </Routes>
    </>
  );
}

export default App;
