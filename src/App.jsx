// favicon
// SEO
// Images

// things to do:
// -- fullscreen api
// -- private route

import React, { useEffect } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import HomePlatform from './pages/HomePlatform';
import Tasks from './pages/Tasks';
import PrivateRoute from './private';

function App() {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path='/homePlatform' element={<PrivateRoute><HomePlatform /></PrivateRoute>} />
        <Route path='/tasks' element={<PrivateRoute><Tasks /></PrivateRoute>} />

        <Route path='*' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;