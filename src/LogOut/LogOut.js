import React from "react";
export default function LogOut() {
  const logoutHandler = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("username");

    window.location.href = "/";
  };

  return (
    <>
      <button onClick={logoutHandler}>Log Out</button>
    </>
  );
}
