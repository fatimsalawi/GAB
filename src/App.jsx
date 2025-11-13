import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Story from "./pages/Story.jsx";
import Locations from "./pages/Locations.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100dvh", display: "grid", gridTemplateRows: "auto 1fr auto" }}>
        <Navbar />
        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "24px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/story" element={<Story />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
