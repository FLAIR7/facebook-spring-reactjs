import React from 'react';
import { Login } from './pages/Login/Login';
import { Routes, Route} from "react-router-dom";
import "./App.scss";
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/reg" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
    </Routes>
    </>
  );
}

export default App;
