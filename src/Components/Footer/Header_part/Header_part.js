import React from "react";
import "./Header_part.css";

function Header_part() {
  return (
    <div className="header_container">
      <div className="part1">
        <p>Home</p>
        <p>About the Portal</p>
        <p>Site Map</p>
        <p>Privacy Policy</p>
      </div>

      <div className="part_rest">
        <p>Link to us</p>
        <p>FAQS</p>
        <p>Linking Policy</p>
      </div>
      <div className="part_rest">
        <p>Terms of Use</p>
        <p>Help</p>
        <p>Contact Us</p>
        <p>Copyright Policy</p>
      </div>
      <div className="part_rest">
        <img
          className="image"
          src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/920saquvcoh44bnj_1605164547.jpeg"
          alt=""
        />
      </div>
      <div>
        <img
          className="image"
          src="https://uxdt.nic.in/wp-content/uploads/2020/06/nic-logo-nic-logo-1-bilingual-white-1-01.jpg?x24036"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header_part;
