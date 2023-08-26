import React, { useContext } from 'react';
import '../css/mystyles/btnlogout.css';
import { AppContext } from '../contexts';
import { useNavigate } from 'react-router-dom';

const BtnLogout = () => {
  
  const { logout } = useContext(AppContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/home', { replace: true });
    scrollTo(0, 0);
  }

  return (
    <button onClick={handleLogout} className='logout'>Log Out</button>
  )
}

export default BtnLogout;