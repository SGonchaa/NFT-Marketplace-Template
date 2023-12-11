import React from "react";
import style from "./styles/TrendingCollection.module.scss";
import { Link } from "react-router-dom";
import cardimgDog from "../../../Images/cardimgdog.png";
import cardimgCat from "../../../Images/cardimgcat.png";
import cardimgBear from "../../../Images/cardimgbear.png";
import mrFox from "../../../Images/mrfox.png";
import cardimgMushroom1 from "../../../Images/cardimgmushroom.png";
import cardimgMushroom2 from "../../../Images/cardimgmushroom2.png";
import cardimgMusroom3 from "../../../Images/cardimgmushroom3.png";
import Shroomie from "../../../Images/shroomie.png";
import cardimgHuman from "../../../Images/cardimghuman.png";
import cardimgHuman2 from "../../../Images/cardimghuman2.png";
import cardimgHuman3 from "../../../Images/cardimghuman3.png";
import beKind2Robots from "../../../Images/BeKind2Robots.png";

function TrendingCollection() {
  return (
    <div className={style.TrendingCollection}>
      <div className={style.container}>
        <div className={style.TrendingCollection_cards}>
          <div className={style.card}>
            <div className={style.card_img}>
              <Link to="/TheOrbitians">
                <img src={cardimgDog} alt="" />
              </Link>
            </div>
            <div className={style.card_more_img}>
              <Link to="/TheOrbitians">
                <img src={cardimgCat} alt="" />
              </Link>
              <Link to="/TheOrbitians">
                <img src={cardimgBear} alt="" />
              </Link>
              <Link to="/TheOrbitians">
                <button>1025+</button>
              </Link>
            </div>
            <div className={style.card_title}>
              <h5>DSGN Animals</h5>
              <div className={style.card_title_name}>
                <img src={mrFox} alt="" />
                <p>MrFox</p>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.card_img}>
              <Link to="/TheOrbitians">
                <img src={cardimgMushroom1} alt="" />
              </Link>
            </div>
            <div className={style.card_more_img}>
              <Link to="/TheOrbitians">
                <img src={cardimgMushroom2} alt="" />
              </Link>
              <Link to="/TheOrbitians">
                <img src={cardimgMusroom3} alt="" />
              </Link>
              <Link to="/TheOrbitians">
                <button>1025+</button>
              </Link>
            </div>
            <div className={style.card_title}>
              <h5>Magic Mushrooms</h5>
              <div className={style.card_title_name}>
                <img src={Shroomie} alt="" />
                <p>Shroomie</p>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.card_img}>
              <Link to="/TheOrbitians">
                <img src={cardimgHuman} alt="" />
              </Link>
            </div>
            <div className={style.card_more_img}>
              <Link to="/TheOrbitians">
                <img src={cardimgHuman2} alt="" />
              </Link>
              <Link to="/TheOrbitians">
                <img src={cardimgHuman3} alt="" />
              </Link>
              <Link to="/TheOrbitians">
                <button>1025+</button>
              </Link>
            </div>
            <div className={style.card_title}>
              <h5>Disco Machines</h5>
              <div className={style.card_title_name}>
                <img src={beKind2Robots} alt="" />
                <p>beKind2Robots</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingCollection;
