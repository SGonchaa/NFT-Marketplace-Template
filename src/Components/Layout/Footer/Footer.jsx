import React from "react";
import style from "./styles/Footer.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../../Images/page-logo.png";
import Anima from "../../../Images/anima.svg";
import YouTube from "../../../Images/youtube.svg";
import Twitter from "../../../Images/twitter.svg";
import Instagram from "../../../Images/instagram.svg";
import { FaRegEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.footer_top}>
          {" "}
          <div className={style.top_first_part}>
            <img src={Logo} alt="" />
            <p>NFT marketplace UI created with Anima for Figma.</p>{" "}
            <p>Join our community</p>
            <div className={style.social_media}>
              <img src={Anima} alt="" />
              <img src={YouTube} alt="" />
              <img src={Twitter} alt="" />
              <img src={Instagram} alt="" />
            </div>
          </div>
          <div className={style.top_second_part}>
            <h5>Explore</h5>
            <Link to="/MarketPlace">
              <p>Marketplace</p>
            </Link>
            <Link to="/Rankings">
              <p>Rankings</p>
            </Link>
            <Link to="/ConnectWallet">
              <p>Connect a wallet</p>
            </Link>
          </div>
          <div className={style.top_third_part}>
            <h5>Join Our Weekly Digest</h5>
            <p>Get exclusive promotions & updates straight to your inbox</p>
            <div className={style.subscribe}>
              {" "}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email here"
              />
              <button>
                <FaRegEnvelope className={style.subscribe_icon}></FaRegEnvelope>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      <div className={style.line}></div>
        <div className={style.footer_bottom}>
          <p>Ⓒ NFT Market. Use this template freely.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
