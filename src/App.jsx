import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Technologies from "./pages/Technologies";
import Problems from "./pages/Problems";
import AI from "./pages/AI";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
