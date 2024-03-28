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
      
      <div>
        이 사이트의 콘텐츠는 코딩 알려주는 누나 리액트 스터디 프로젝트를
        기반합니다.
      </div>

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
      <img
        alt=""
        width={160}
        src="https://import.cdn.thinkific.com/cdn-cgi/image/width=384,dpr=1,onerror=redirect/523761%2Fcustom_site_themes%2Fid%2FKSA4UpqrRVydmfeSDXVJ_KakaoTalk_20231101_091017834.png"
      />
    </div>
  );
};

export default Footer;
