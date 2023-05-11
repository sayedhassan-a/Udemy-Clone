import React from "react";

function Goal(props) {
  const { goal } = props;
  return (
    <div
      className="objective"
      style={{
        display: "inline-block",
        width: "50%",
        minWidth: "fit-content",
        fontSize: "14px",
      }}
    >
      <i class="fa fa-check"></i>&nbsp;&nbsp;
      <span>{goal}</span>
    </div>
  );
}

export default Goal;
