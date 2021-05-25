import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import whiteLogo from "../images/White_Logo.png";

const Footer = () => {
  return (
    <div className="p-10 lg:px-20 flex flex-col md:flex-row justify-around footer greyish">
      <div className="footer-logo mb-10 md:mb-0">
        <Link to="/">
          <img className="p-4 m-auto" height="auto" src={whiteLogo} />
        </Link>
      </div>

      <div className="footer-info md:w-3/5 text-left text-white md:px-10">
        <p>7000 Parkwood Boulevard, Ste G200</p>
        <p>Frisco, TX 75034</p>
        <p>972-329-4811</p>
        <p>Hours: M-F 8:00 AM - 5:00 PM</p>
        <p>Evening and weekend appointments available.</p>
      </div>

    <div className="footer-social w-3/5 m-auto md:w-auto">
        <h3 className="text-white md:text-right text-center my-10 md:my-0">Connect <br />on Social</h3>
        <div className="social-icons flex justify-around">
            <a target="_blank" rel="noreferrer nofollower" href="https://www.linkedin.com/company/ott-insurance-agency/"><StaticImage src="../images/linkedin-logo.png" /></a>
            <a target="_blank" rel="nofollower noreferrer" href="https://www.facebook.com/ottinsuranceagency.farmers/"><StaticImage src="../images/facebook-logo.png" /></a>
        </div>
    </div>

    </div>
  );
};

export default Footer;
