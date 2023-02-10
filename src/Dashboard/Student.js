/* eslint-disable*/
import React, { useEffect, useState } from "react";
import LogOut from "../LogOut/LogOut";
import "./Student.css";
import Header from "../Design/index";

const StudentPage = () => {
  const [activityLog, setActivityLog] = useState([]);
  const [check, setCheck] = useState(false);
  let username = localStorage.getItem("username");

  useEffect(() => {
    let activityLog = JSON.parse(localStorage.getItem("activitylog"));
    if (activityLog) {
      setActivityLog([...activityLog]);
    }
    console.log(activityLog);
  }, []);

  return (
    <>
      <div className="student-page">
        <div></div>
        <Header />
        <div className="student-container">
          <button
            onClick={() => {
              setCheck(!check);
            }}
          >
            check
          </button>
          <div className="calculations">
            <h2>Activity Log </h2>
            <ul>
              {activityLog.map((activityLog) => (
                <div key={Math.random() * 10}>
                  <span>•</span> {activityLog.input}
                  {check && (
                    <div>
                      <span>Answer:</span>:{activityLog.output}
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentPage;
