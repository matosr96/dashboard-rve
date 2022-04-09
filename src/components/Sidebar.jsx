import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Navigation() {
  return (
    <div>
      <nav className="sidebar">
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <Link to="/">
                <i class="bx bx-home-alt icon"></i>
              </Link>

              <Link to="/notification">
                <i class="bx bx-bell icon"></i>
              </Link>

              <Link to="/">
                <i class="bx bx-home-alt icon"></i>
              </Link>

              <Link to="/notification">
                <i class="bx bx-bell icon"></i>
              </Link>

              <Link to="/">
                <i class="bx bx-home-alt icon"></i>
              </Link>

              <Link to="/notification">
                <i class="bx bx-bell icon"></i>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
