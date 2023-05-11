import React from "react";
import styles from "../../styles/course/footer.css";
import logoLight from "../../files/logo-udemy-white.svg";
import nasdaq from "../../files/footer/Nasdaq.svg";
import netapp from "../../files/footer//netapp-light.svg";
import volkswagen from "../../files/footer/volkswagen-light.svg";
import box from "../../files/footer/box-light.svg";
import eventbrite from "../../files/footer/eventbrite-light.svg";
function Footer() {
  return (
    <div className="footer ">
      <div className="d-lg-flex justify-content-between">
        <div className="footer-text">
          Top companies choose <span>Udemy Business</span> to build in-demand
          career skills.
        </div>
        <div className="footer-logo">
          <img src={nasdaq} alt="nasdaq" />
          <img src={volkswagen} alt="volkswagen" />
          <img src={box} alt="box" />
          <img src={netapp} alt="netapp" />
          <img src={eventbrite} alt="eventbrite" />
        </div>
      </div>
      <hr style={{ color: "white", marginTop: "20px", marginBottom: "20px" }} />
      <div className="footer-2nd-section">
        <div className="footer-links d-flex flex-wrap">
          <a href="/">
            <span>Udemy Business</span>
          </a>
          <a href="/">
            <span>Careers</span>
          </a>
          <a href="/">
            <span>Terms</span>
          </a>
          <a href="/">
            <span>Teach on Udemy</span>
          </a>
          <a href="/">
            <span>Blog </span>
          </a>
          <a href="/">
            <span>Privacy policy </span>
          </a>
          <a href="/">
            <span>Get the app</span>
          </a>
          <a href="/">
            <span>Help and Support</span>
          </a>
          <a href="/">
            <span>Cookie settings </span>
          </a>
          <a href="/">
            <span>About us </span>
          </a>
          <a href="/">
            <span>Affiliate</span>
          </a>
          <a href="/">
            <span>Sitemap</span>
          </a>
          <a href="/">
            <span>Contact us</span>
          </a>
          <a href="/">
            <span>Investors</span>
          </a>
          <a href="/">
            <span>Accessibility statement</span>
          </a>
          <span></span>
        </div>
        <button className="lang-btn d-flex">
          <div className="align-self-end">
            <i class="material-icons">language</i>
          </div>{" "}
          <span>English</span>
        </button>
      </div>
      <div className="rights">
        <img src={logoLight} alt="log" className="udemy-light" />
        <div>© 2022 Udemy, Inc.</div>
      </div>
    </div>
  );
}

export default Footer;
