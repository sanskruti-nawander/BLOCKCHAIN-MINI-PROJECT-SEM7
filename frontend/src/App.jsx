import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Tracker from "./pages/Tracker";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/track" element={<Tracker />} />
      </Routes>
    </BrowserRouter>
  );
}
