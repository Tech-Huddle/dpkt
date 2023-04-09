import React from "react";
import "./HeaderPart.css";

function HeaderPart() {
  return (
    <div className="footer_head">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <a href="/home">
              <p>Home</p>
            </a>
            <a href="/home">
              <p>About the Portal</p>
            </a>
            <a href="/home">
              <p>Site Map</p>
            </a>
            <a href="/home">
              <p>Privacy Policy</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <a href="/home">
              <p>Link to us</p>
            </a>
            <a href="/home">
              <p>FAQS</p>
            </a>
            <a href="/home">
              <p>Linking Policy</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <a href="/home">
              <p>Terms of Use</p>
            </a>
            <a href="/home">
              <p>Help</p>
            </a>
            <a href="/home">
              <p>Contact us</p>
            </a>
            <a href="/home">
              <p>Copyright Policy</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <img
              src="https://images.all-free-download.com/images/graphicwebp/qr_code_198897.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPart;
