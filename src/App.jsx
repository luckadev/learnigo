// favicon
// SEO
// Images

import React, { useEffect, useContext } from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigate
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
import { AppContext } from './contexts';

function App() {

  const { user, setUser } = useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();

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


  useEffect(() => {
    if(user) {
      navigate('/homePlatform', { replace: true });
    } else {
      navigate('/signIn', { replace: true });
    }
  }, [])

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path='/homePlatform' element={<HomePlatform />} />
        <Route path='/tasks' element={<Tasks />} />

        <Route path='*' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

// things to do:
// -- fullscreen api
// -- private route