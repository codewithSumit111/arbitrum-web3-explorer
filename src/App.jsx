import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Concepts from "./pages/Concepts";
import Prices from "./pages/Prices";
import Simulator from "./pages/Simulator";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concepts" element={<Concepts />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/simulator" element={<Simulator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
