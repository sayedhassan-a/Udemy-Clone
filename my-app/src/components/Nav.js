import React from "react";
import logoBlack from "../files/logo-udemy-black.svg";
import styles from "../styles/nav.css";
function Nav() {
  return (
    <nav class="pers-nav">
      <span class="fa fa-bars" id="bar"></span>
      <span class="pers-navitem pers-site">
        <img src={logoBlack} alt="logo" id="logo" />
      </span>
      <span class="pers-navitem pers-cat">Categories</span>

      <form class="pers-navitem pers-form" onsubmit="{upd()}">
        <button type="submit" class="pers-sbutton">
          <i class="material-icons">search</i>
        </button>
        <input
          type="text"
          class="pers-bar"
          placeholder="Search for anything"
          id="search-item"
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
