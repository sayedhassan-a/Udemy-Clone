import React from "react";
import styles from "../styles/header.css";
import alarmImg from "../files/alarm.jpg";
function Header() {
  return (
    <header>
      <div class="pers-header">
        <h1>New to Udemy? Lucky you.</h1>
        <p>
          Courses start at E£169.99. Get your new-student offer before it
          expires.
        </p>
      </div>
      <div class="pers-alarm">
        <img src={alarmImg} alt="alarm" />
      </div>
      <div class="pers-header2">
        <h1>New to Udemy? Lucky you.</h1>
        <p>
          Courses start at E£169.99. Get your new-student offer before it
          expires.
        </p>
      </div>
    </header>
  );
}

export default Header;
