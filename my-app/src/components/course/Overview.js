import React from "react";
import Goal from "./Goal";
function Overview(props) {
  const { goalsList } = props;
  return (
    <div
      className="overviewBody"
      style={{
        border: "solid black 1px",
        boxSizing: "border-box",
        padding: "2rem",
        width: "100%",
        maxWidth: "80rem",
      }}
    >
      <p className="sectionHeader">What you'll learn</p>
      {goalsList?.map((str) => (
        <Goal goal={str}></Goal>
      ))}
    </div>
  );
}

export default Overview;
