import React from "react";
import { HiSearch } from "react-icons/hi";
import "./navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_center">
        <div className="navbar_center_wrapper">
          <div className="navbar_left">
            <div className="navbar_left_wrapper">
              <img
                src="images/logo.png"
                alt="logo"
                className="navbar_left_image"
              />
            </div>
          </div>
          <div className="navabar_center">
            <div className="navabar_center_wrapper">
              <span className="navbar_center_title"> search</span>
              <HiSearch className="navbar_center_icon" />
              <input type="text" className="navbar_center_input" />
            </div>
          </div>
          <div className="navbar_right">
            <div className="navbar_right_wrapper">
              <img
                src="images/home.svg"
                alt=""
                className="navbar_right_icons"
                width="25px"
                height="25px"
              />
              <img
                src="images/message.svg"
                alt=""
                className="navbar_right_icons"
                width="25px"
                height="25px"
              />
              <span className="navbar_right_up">3</span>
              <img
                src="images/find.svg"
                alt=""
                className="navbar_right_icons"
                width="25px"
                height="25px"
              />
              <img
                src="images/love.svg"
                alt=""
                className="navbar_right_icons"
                width="25px"
                height="25px"
              />
              <img
                src="images/pp1.png"
                alt="user"
                className="navbar_right_user"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
