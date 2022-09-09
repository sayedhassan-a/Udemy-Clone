import React from "react";
import Goal from "./Goal";
function Overview(props) {
  const { goalsList } = props;
  console.log(goalsList[1]);
  return (
    <div
      style={{
        border: "solid black 1px",
        boxSizing: "border-box",
        padding: "2rem",
        maxWidth: "80rem",
        marginLeft: 0,
      }}
    >
      <p className="sectionHeader">What you'll learn</p>
      {goalsList.map((str) => (
        <Goal goal={str}></Goal>
      ))}
    </div>
  );
}

export default Overview;
