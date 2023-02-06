import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="btn">
        Home
      </Link>
      <Link to="/login" className="btn">
        login
      </Link>
    </nav>
  );
};

export default NavBar;
