import React, { useState, useEffect } from "react";
import style from "./styles/TopCreators.module.scss";
import { Link } from "react-router-dom";
import { TopCreatorsData } from "./meta/TopCreatorsData";
import { LiaRocketSolid } from "react-icons/lia";

function TopCreators() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1280);
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 1280);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={style.TopCreators}>
      <div className={style.container}>
        <div className={style.TopCreators_headline}>
          <div className={style.TopCreators_headline_title}>
            <h3>Top Creators</h3>
            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
          </div>
          <div className={style.view_rankings_btn}>
            <Link to="/Rankings">
              <button>
                <LiaRocketSolid className={style.rocket_icon}></LiaRocketSolid>
                View Rankings
              </button>
            </Link>
          </div>
        </div>
        <div className={style.creators}>
          {TopCreatorsData.slice(0, isSmallScreen ? 6 : TopCreatorsData.length).map(
            (creator_card) => (
              <Link to="/AnimaKid">
                <div className={style.creator_card}>
                  <div className={style.creator_card_top}>
                    <div className={style.creator_card_number}>
                      <p>{creator_card.number}</p>
                    </div>
                    <img src={creator_card.img} alt="" />
                  </div>

                  <div className={style.creator_card_bottom}>
                    <h5>{creator_card.name}</h5>
                    <p>
                      Total Sales: <span>34.53 ETH</span>
                    </p>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default TopCreators;
