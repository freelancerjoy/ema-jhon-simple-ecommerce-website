import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="menu-items">
        <Link to="/">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Manage Invetory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
        {user && (
          <span className="text-white">
            {user.email} <button onClick={handleLogOut}>Log out</button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
