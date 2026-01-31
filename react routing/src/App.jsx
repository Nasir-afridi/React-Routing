import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

function App() {
  return (
    <>
    <Links />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
