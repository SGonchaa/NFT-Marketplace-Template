import React from "react";
import style from "./styles/HowitWorks.module.scss";
import HowitWorks1 from "../../../Images/howitworks1.svg";
import HowitWorks2 from "../../../Images/howitworks2.svg";
import HowitWorks3 from "../../../Images/howitworks3.svg";

function HowitWorks() {
  return (
    <div className={style.HowitWorks}>
      <div className={style.container}>
        <div className={style.HowitWorks_headline}>
          <div className={style.HowitWorks_headline_title}>
            <h3>How It Works</h3>
            <p>Find Out How To Get Started</p>
          </div>
        </div>
        <div className={style.HowitWorks_cards}>
          <div className={style.card}>
            <div className={style.card_img_part}>
              <img src={HowitWorks1} alt="" />
            </div>
            <div className={style.card_info}>
              <h5>Setup Your Wallet</h5>
              <p>
                Set up your wallet of choice. Connect it to the Animarket by
                clicking the wallet icon in the top right corner.
              </p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.card_img_part}>
              <img src={HowitWorks2} alt="" />
            </div>
            <div className={style.card_info}>
              <h5>Create Collection</h5>
              <p>
                Upload your work and setup your collection. Add a description,
                social links and floor price.
              </p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.card_img_part}>
              <img src={HowitWorks3} alt="" />
            </div>
            <div className={style.card_info}>
              <h5>Start Earning</h5>
              <p>
                Choose between auctions and fixed-price listings. Start earning
                by selling your NFTs or trading others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowitWorks;
