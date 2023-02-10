import React from "react";
import LogOut from "../LogOut/LogOut";
import "./index.css";

<div className="logout">
  <LogOut />
</div>;

const Header = () => {
  let role = localStorage.getItem("role");
  let username = localStorage.getItem("username");
  return (
    <div className="header">
      Welcome {role}, {username}
      <LogOut />
    </div>
  );
};

export default Header;
