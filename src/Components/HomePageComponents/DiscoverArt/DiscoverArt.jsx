import React from "react";
import style from "./styles/DiscoverArt.module.scss";
import gifImage from "../../../Images/gifimage.gif";
import { LiaRocketSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Discover() {
  return (
    <div className={style.discover}>
      <div className={style.container}>
        <div className={style.discover_left_part}>
          <div className={style.discover_title}>
            <h1>Discover Digital Art & Collect Nfts</h1>
            <p>
              Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And
              Sell Art From More Than 20k Nft Artists.
            </p>
            <img className={style.responsive_gifImage} src={gifImage} alt="" />
          </div>
          <div className={style.get_started_btn}>
            <Link to="/SignUp">
              <button>
                <LiaRocketSolid />
                Get Started
              </button>
            </Link>
          </div>
          <div className={style.additional_info}>
            <div className={style.info}>
              240k+
              <div className={style.title}>Total Sale</div>
            </div>
            <div className={style.info}>
              100k+
              <div className={style.title}>Auctions</div>
            </div>
            <div className={style.info}>
              240k+
              <div className={style.title}>Artists</div>
            </div>
          </div>
        </div>
        <div className={style.discover_right_part}>
          <Link to="/AnimaKid">
            {" "}
            <img src={gifImage} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Discover;
