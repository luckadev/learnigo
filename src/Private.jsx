import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './contexts';

const PrivateRoute = ({ children }) => {

  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  if(user == false) {
    navigate('/home', { replace: true });
    return;
  }

  return children;
}

export default PrivateRoute;