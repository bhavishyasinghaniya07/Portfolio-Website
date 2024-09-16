import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="logo">Thanks For Your Valuble Time</div>
          <p>- Bhavishya Parmar</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2024 Bhavishya Parmar. All rights reserved
        </p>

        <div className="footer-bottom-right">
          <p>Term Of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
