import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  };
  return (
    <div>
      {auth ? (
        <ul className="navbar">
          <li className="nav">
            <Link to="/">Contacts</Link>
          </li>
          <li className="nav">
            <Link to="addcontact">AddContact</Link>
          </li>
          <li className="nav">
            <Link to="updatecontact">UpdateContact</Link>
          </li>
          {/* {/* <li className="nav"><Link to="logout">LogOut</Link></li> \ */}
          <li>
            <Link onClick={logout} to="/singup">
              Logout ({auth.name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="navbar">
          <li className="nav sl">
            <Link to="singup">SingIn</Link>
          </li>
          <li className="nav sl1">
            <Link to="login">LogIn</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Navbar;
