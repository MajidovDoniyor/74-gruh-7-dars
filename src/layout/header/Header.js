import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to={"/"}>
                crud
              </Link>
              <Link className="nav-link" to={"/get"}>
                get
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
