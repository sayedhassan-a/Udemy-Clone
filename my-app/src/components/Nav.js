import React, { useState } from "react";
import logoBlack from "../files/logo-udemy-black.svg";
import styles from "../styles/nav.css";
import { useRef } from "react";
import {
  createSearchParams,
  Navigate,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
function Nav(props) {
  const { handle } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchStr, setSearchStr] = useState();
  const navigate = useNavigate();
  const searcRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchStr);
    handle(searcRef?.current.value);
    navigate("/?filter=" + searcRef?.current.value);
  };
  return (
    <nav class="pers-nav">
      <span class="fa fa-bars" id="bar"></span>
      <span class="pers-navitem pers-site">
        <a href="/">
          <img src={logoBlack} alt="logo" id="logo" />
        </a>
      </span>
      <span class="pers-navitem pers-cat">Categories</span>

      <form class="pers-navitem pers-form" onSubmit={handleSubmit}>
        <button type="submit" class="pers-sbutton">
          <i class="material-icons">search</i>
        </button>
        <input
          type="text"
          class="pers-bar"
          placeholder="Search for anything"
          id="search-item"
          value={searchStr}
          ref={searcRef}
          onChange={(e) => setSearchStr(e.target.value)}
        />
      </form>

      <span class="pers-navitem pers-bus">Udemy Business</span>
      <span class="pers-navitem pers-teach">Teach on Udemy</span>

      <span class="pers-navitem pers-cart">
        <i class="material-icons">shopping_cart</i>
      </span>
      <div class="pers-last">
        <span class="pers-navitem pers-log">Log in</span>
        <span class="pers-navitem pers-sign">Sign up</span>
        <span class="pers-navitem pers-lang">
          <i class="material-icons">language</i>
        </span>
      </div>
    </nav>
  );
}

export default Nav;
