import React, { useEffect, useState, useContext } from "react";

export const DataContext = React.createContext();
function DataFetch() {
  const [coursDetails, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:4000/data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.courses);
        return setData(data.courses);
      });
  }, []);
  return <div>DataFetch</div>;
}

export default DataFetch;
