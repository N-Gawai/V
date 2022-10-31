import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";
import About from "./routes/About";
import Docs from "./routes/Docs";
import Contact from "./routes/Contact";
import "./index.css";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <BubblyContainer />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Docs />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="* " element={<>No Match</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
