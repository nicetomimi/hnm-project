import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {

    const footerMenuList = [
        "카테고리",
        "기업정보",
        "고객지원",
        "멤버십"
      ];

  return (
    <div className="footer-area">
      
      <ul className="footer-menu-list">
          {footerMenuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      


      <div className="sns-icon-area">
        <div>
          {" "}
          <FontAwesomeIcon icon={faYoutube} size="xl" />{" "}
        </div>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </div>
        <div>
          <FontAwesomeIcon icon={faTiktok} size="xl" />
        </div>
        <div>
          <FontAwesomeIcon icon={faFacebook} size="xl" />
        </div>
      </div>

      <img
        alt=""
        width={60}
        src="https://churchillsquare.com/wp-content/uploads/2018/05/h-m.png"
      />

    </div>
  );
};

export default Footer;
