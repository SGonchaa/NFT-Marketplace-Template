import React from "react";
import style from "./styles/MoreNfts.module.scss";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import cardImg1 from "../../../Images/morenfts1.png";
import cardImg2 from "../../../Images/morenfts2.png";
import cardImg3 from "../../../Images/morenfts3.png";
import MoonDancerImg from "../../../Images/morenfts11.png";
import NebulaKid from "../../../Images/morenfts22.png";
import Spaceone from "../../../Images/morenfts33.png";

function MoreNfts() {
  return (
    <div className={style.MoreNfts}>
      <div className={style.container}>
        <div className={style.MoreNfts_headline}>
          <div className={style.MoreNfts_headline_title}>
            <h3>Discover More Nfts</h3>
            <p>Explore New Trending Nfts</p>
          </div>
          <div className={style.see_all_btn}>
            <Link to="/MarketPlace">
              <button>
                <IoEyeOutline className={style.see_all_icon}></IoEyeOutline>
                See All
              </button>
            </Link>
          </div>
        </div>
        <div className={style.MoreNfts_cards}>
          <Link to="/TheOrbitians">
            <div className={style.card}>
              <div className={style.card_img_part}>
                <img src={cardImg1} alt="" />
              </div>
              <div className={style.card_info}>
                <div className={style.card_info_top}>
                  <h5>Distant Galaxy</h5>
                  <div className={style.card_info_artist}>
                    <img src={MoonDancerImg} alt="" />
                    <p>MoonDancer</p>
                  </div>
                </div>
                <div className={style.card_info_bottom}>
                  <div className={style.additional}>
                    <p>Price</p>
                    <span>1.63ETH</span>
                  </div>
                  <div className={style.additional}>
                    <p>Highest Bid</p>
                    <span>0.33 wETH</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/TheOrbitians">
            {" "}
            <div className={style.card}>
              <div className={style.card_img_part}>
                <img src={cardImg2} alt="" />
              </div>
              <div className={style.card_info}>
                <div className={style.card_info_top}>
                  <h5>Life On Edena</h5>
                  <div className={style.card_info_artist}>
                    <img src={NebulaKid} alt="" />
                    <p>NebulaKid</p>
                  </div>
                </div>
                <div className={style.card_info_bottom}>
                  <div className={style.additional}>
                    <p>Price</p>
                    <span>1.63ETH</span>
                  </div>
                  <div className={style.additional}>
                    <p>Highest Bid</p>
                    <span>0.33 wETH</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/TheOrbitians">
            {" "}
            <div className={style.card}>
              <div className={style.card_img_part}>
                <img src={cardImg3} alt="" />
              </div>
              <div className={style.card_info}>
                <div className={style.card_info_top}>
                  <h5>Astrofiction</h5>
                  <div className={style.card_info_artist}>
                    <img src={Spaceone} alt="" />
                    <p>Spaceone</p>
                  </div>
                </div>
                <div className={style.card_info_bottom}>
                  <div className={style.additional}>
                    <p>Price</p>
                    <span>1.63ETH</span>
                  </div>
                  <div className={style.additional}>
                    <p>Highest Bid</p>
                    <span>0.33 wETH</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MoreNfts;
