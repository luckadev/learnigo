import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from './contexts';

const PrivateRoute = ({ children }) => {

  const { user } = useContext(AppContext);

  return user == true ? children : Navigate('/', { replace: true });
}

export default PrivateRoute;