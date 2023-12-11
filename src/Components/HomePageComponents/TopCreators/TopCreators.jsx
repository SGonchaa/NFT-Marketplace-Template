import React, { useState, useEffect } from "react";
import style from "./styles/TopCreators.module.scss";
import { LiaRocketSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

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
  var data = [
    {
      number: 1,
      name: "Keepitreal",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-98@2x.png",
    },
    {
      number: 2,
      name: "Digilab",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-99@2x.png",
    },
    {
      number: 3,
      name: "Gravityone",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-100@2x.png",
    },
    {
      number: 4,
      name: "Juanie",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-101@2x.png",
    },
    {
      number: 5,
      name: "Bluewhale",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-102@2x.png",
    },
    {
      number: 6,
      name: "MrFox",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-1@2x.png",
    },
    {
      number: 7,
      name: "Shroomie",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-103@2x.png",
    },
    {
      number: 8,
      name: "Robotica",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-104@2x.png",
    },
    {
      number: 9,
      name: "Rustryrobot",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-105@2x.png",
    },
    {
      number: 10,
      name: "Animakid",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-106@2x.png",
    },
    {
      number: 11,
      name: "Dotgu",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-107@2x.png",
    },
    {
      number: 12,
      name: "Ghiblier",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-108@2x.png",
    },
  ];
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
          {data
            .slice(0, isSmallScreen ? 6 : data.length)
            .map((creator_card) => (
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
            ))}
        </div>
      </div>
    </div>
  );
}

export default TopCreators;
