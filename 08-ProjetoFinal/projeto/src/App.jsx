import React from 'react';
import './App.css';
//import Api from './api/Api';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Components
import Header from './Components/Header';
import Footer from './Components/Footer';
import User from './Components/User/User';
import ProtectedRouter from './Components/Helper/ProtectedRouter';
//Pages
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
//userContext
import { UserStorage } from './UserContext';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
