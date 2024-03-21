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
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './NotFound';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
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
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
