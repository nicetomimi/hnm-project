import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = ({ authenticate, setAuthenticate }) => {
  // 메뉴 배열 만들어주기
  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sport",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const goToLogout = () => {
    if (window.confirm("정말 로그아웃 하시겠습니까?")) {
      setAuthenticate(false);
      navigate("/");
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const [menuToggle, setMenuToggle] = useState(false);
  const [side, setSide] = useState(false);

  useEffect(() => {
    if (menuToggle) {
      setSide(true);
    }
  }, [menuToggle]);

  const clickSideCancel = () => {
    setSide(false);
    setTimeout(() => {
      setMenuToggle(false);
    });
  };

  return (
    <div>
      <div className="navbar-all-area">
        <div className="mobile-menu">
          <div>
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setMenuToggle(true)}
            />
          </div>
          <div className="mo-search-area">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              onKeyPress={(event) => {
                search(event);
              }}
              placeholder="제품 검색"
            ></input>
          </div>
        </div>

        <div>
          <div
            className="login-area"
            onClick={authenticate ? goToLogout : goToLogin}
          >
            <FontAwesomeIcon icon={faUser} />
            <div>{authenticate ? "로그아웃" : "로그인"}</div>
          </div>
        </div>

        <div className="logo-area" onClick={goToHome}>
          <img
            alt=""
            width={100}
            src="https://churchillsquare.com/wp-content/uploads/2018/05/h-m.png"
          />
        </div>

        <div className={menuToggle ? "mo-menu-area" : "menu-area"}>
          <button onClick={clickSideCancel} className="x-button">
            <FontAwesomeIcon icon={faX}/>
          </button>
          <ul className={side ? "mo-menu-list" : "menu-list"}>
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>

          <div className="search-area">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              onKeyPress={(event) => {
                search(event);
              }}
              placeholder="제품 검색"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
