import React from "react";

function Rating(props) {
  const { include, rating } = props;
  console.log(props);
  let x = parseFloat(rating);
  const val = x;
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
      return "fa fa-star-o pers-rate";
    }
  };
  return (
    <React.Fragment>
      {include && <span className="pers-rate-num">{val}&nbsp;</span>}
      <span className={rate()}>&nbsp;</span>
      <span className={rate()}>&nbsp;</span>
      <span className={rate()}>&nbsp;</span>
      <span className={rate()}>&nbsp;</span>
      <span className={rate()}>&nbsp;</span>
    </React.Fragment>
  );
}

export default Rating;
