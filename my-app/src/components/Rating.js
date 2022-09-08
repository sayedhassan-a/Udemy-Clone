import React from "react";

function Rating(props) {
  const { rating } = props;
  console.log(rating);
  let x = parseFloat(rating);
  x = x.toFixed(1);
  const rate = () => {
    if (x > 0.5) {
      x--;
      return "fa fa-star pers-rate";
    } else if (x > 0) {
      x--;
      return "fa fa-star-half-empty pers-rate";
    } else {
      x--;
      return "fa fa-star";
    }
  };
  return (
    <React.Fragment>
      <span className="pers-rate-num">{x}&nbsp;</span>
      <span className={rate()}>&nbsp;</span>
      <span className={rate()}>&nbsp;</span>
      <span className={rate()}>&nbsp;</span>
      <span className={rate()}>&nbsp;</span>
      <span className={rate()}>&nbsp;</span>
    </React.Fragment>
  );
}

export default Rating;
