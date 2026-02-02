import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Navbar from "./Navbar";
import College from "./College";
import Student from "./Student";
import PageNotFound from "./PageNotFound";
import Details from "./Details";
import Department from "./Department";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* Nested Routes */}
        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="details" element={<Details />} />
          <Route path="department" element={<Department />} />
        </Route>

        <Route path="user">
          <Route path="/user/services" element={<Services />}></Route>
          <Route path="/user/about" element={<About />}></Route>
        </Route>

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
