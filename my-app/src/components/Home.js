import React from "react";
import Content from "./Content";
import Header from "./Header";
import Nav from "./Nav";
function Home() {
  return (
    <React.Fragment>
      <Nav></Nav>
      <Header></Header>
      <Content></Content>
    </React.Fragment>
  );
}

export default Home;
