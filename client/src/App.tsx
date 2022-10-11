import React from 'react';
import Login from './pages/Login/Login';
import { Routes, Route} from "react-router-dom";
import "./App.scss";
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Navbar from './components/Navbar/Navbar';
import NotFound from './pages/404/NotFound';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/reg" element={<Register/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
    </Routes>
    </>
  );
}

export default App;
