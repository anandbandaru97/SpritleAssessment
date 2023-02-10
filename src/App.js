import React from "react";

// pages

import Login from "./Login/index";
import Signup from "./SignUp/index";
import Home from "./Home/index";
import Pagenotfound from "./Dashboard/PageNotFound";

// react router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Master from "./Dashboard/Master";
import StudentPage from "./Dashboard/Student";

function App() {
  const role = localStorage.getItem("role");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {role === "master" && (
            <Route path="/master" element={<Master />}></Route>
          )}
          {role === "student" && (
            <Route path="/student" element={<StudentPage />}></Route>
          )}
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
