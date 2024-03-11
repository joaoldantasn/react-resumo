import React from 'react';
import './App.css';
//import Api from './api/Api';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Components
import Header from './Components/Header';
import Footer from './Components/Footer';
//Pages
import Home from './Pages/Home';
import Login from './Pages/Login/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
