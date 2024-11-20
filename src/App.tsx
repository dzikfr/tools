import Home from "./pages/Home";
import React from "react";
import RemoveBg from "./pages/RemoveBg";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResizeImg from "./pages/ResizeImg";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/removebg" element={<RemoveBg />} />
        <Route path="/imgresize" element={<ResizeImg/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
