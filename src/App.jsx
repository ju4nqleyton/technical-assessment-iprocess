import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
