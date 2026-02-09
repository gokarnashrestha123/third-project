// App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./index.css";

const App = () => {
  return (
    <div>
     

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </div>
  );
};

export default App;
