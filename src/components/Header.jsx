import React from "react";
import "../styles/Header.css";

export default function Header() {
  return(
    <nav className="container__navbar">
      <div className="logo">
        <img src="/img/logo.svg" alt="logo" />
      </div>
      <div className="profile">
            <div className="profile__photo">
              <img src="/img/avatar.png" alt="" />
            </div>
            <h3>Admin <i className='bx bx-chevron-down' ></i></h3>
          </div>
    </nav>
  );
}
