import React, { useEffect } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import HomePlatform from './pages/HomePlatform';
import Tasks from './pages/Tasks';
import NotFound from './pages/NotFound';
import Dictionary from './pages/Dictionary';

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

        <Route path='/homePlatform' element={<HomePlatform />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/dictionary' element={<Dictionary />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;