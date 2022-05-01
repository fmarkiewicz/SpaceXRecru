import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Launches } from "./pages";
import { Header } from "./components/atoms";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Launches />} />
      </Routes>
    </div>
  );
};

export default App;
