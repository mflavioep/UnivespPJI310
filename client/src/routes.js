import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//import de páginas
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Dispositivo from './pages/Dispositivo'
import Login from './pages/Login'
import Profile from './pages/Profile'

console.log('Router')

function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/disp" element={<Dispositivo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
