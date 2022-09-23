import React from 'react';
import { Login } from './pages/Login/Login';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login/>}></Route>
    </Routes>
  );
}

export default App;
