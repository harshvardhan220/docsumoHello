import React, { useEffect, useState } from "react";
import "./App.css";
import docsumoLogo from "./assets/logo.png";
import Login from "./Pages/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Hello from "./Pages/Hello";

function App() {
  const [data, setData] = useState("");
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="logo__container">
          <img src={docsumoLogo} alt="/" className="logo" />
        </div>
        <Routes>
          {data !== "" && (
            <Route path="/hello" element={<Hello data={data} />} />
          )}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setData={setData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
