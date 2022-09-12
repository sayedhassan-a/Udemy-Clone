import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import Nav from "./Nav";
import { useSearchParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { DataContext } from "../App";
export const QueryContext = React.createContext();
function Home() {
  const [query, setQuery] = useSearchParams();
  const [coursDetails, filtered] = useContext(DataContext);
  const [filter, setFilter] = useState();
  useEffect(() => {
    let temp = coursDetails?.courses;
    console.log(query.get("query")?.toLowerCase());
    setFilter(
      temp?.filter((obj) => {
        if (query.get("query"))
          return (
            obj.title
              .toLowerCase()
              .search(" " + query.get("query")?.toLowerCase()) != -1
          );
        else return temp;
      })
    );
  }, [coursDetails, query]);
  return (
    <React.Fragment>
      <QueryContext.Provider value={filter}>
        <Header></Header>
        <Content></Content>
      </QueryContext.Provider>
    </React.Fragment>
  );
}

export default Home;
