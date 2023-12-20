import React from "react";
import style from "./styles/Navbar.module.scss";
import Logo from "../../../Images/page-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.container}>
        <div className={style.navbar_left_part}>
          <Link to="/">
            {" "}
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className={style.navbar_right_part}>
          <Link to="/MarketPlace">
            <span>Marketplace</span>
          </Link>
          <Link to="/Rankings">
            <span>Rankings</span>
          </Link>
          <Link to="/ConnectWallet">
            <span>Connect a wallet</span>
          </Link>
          <div className={style.navbar_button_part}>
            <Link to="/SignUp">
              <button>
                <IoPersonOutline />
                Sign up
              </button>
            </Link>
          </div>
        </div>
        <RxHamburgerMenu className={style.burger_icon}></RxHamburgerMenu>
      </div>
    </div>
  );
}

export default Navbar;
