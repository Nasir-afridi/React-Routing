import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Navbar from "./Navbar";
import College from "./College";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}/>
        <Route path="/college" element={<College />}/>
        <Route path="/*" element={<PageNotFound />}/>
      </Routes>
    </>
  );
}

export default App;
