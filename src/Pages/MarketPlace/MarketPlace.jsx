import React from "react";
import style from "./styles/MarketPlace.module.scss";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function MarketPlace() {
  var data = [
    {
      name: "Magic Mushroom 0325",
      person: "Shroomie",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder@2x.png",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png",
    },
    {
      name: "Happy Robot 032",
      person: "BeKind2Robots",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-65@2x.png",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-54@2x.png",
    },
    {
      name: "Happy Robot 024",
      person: "BeKind2Robots",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-66@2x.png",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-54@2x.png",
    },
    {
      name: "Designer Bear",
      person: "Mr Fox",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-1@2x.png",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder@2x.png",
    },
    {
      name: "Colorful Dog 0356",
      person: "Keepitreal",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-67@2x.png",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-57@2x.png",
    },
    {
      name: "Dancing Robot 0312",
      person: "Robotica",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-68@2x.png",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-58@2x.png",
    },
    {
      name: "Cherry Blossom Girls 035",
      person: "MoonDancer",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-69@2x.png",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-59@2x.png",
    },
    {
      name: "Space Travel",
      person: "NebulaKid",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-70@2x.png",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png",
    },
    {
      name: "Sunset Dimension",
      person: "AnimaKid",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-2@2x.png",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-33@2x.png",
    },
    {
      name: "Desert Walk",
      person: "Catch 22",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-71@2x.png",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-120@2x.png",
    },
    {
      name: "Icecream Ape 0324",
      person: "Ice Ape Club",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-72@2x.png",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-121@2x.png",
    },
    {
      name: "Colorful Dog 0344",
      person: "PuppyPower",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-73@2x.png",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-72@2x.png",
    },
  ];
  return (
    <div className={style.MarketPlace}>
      <div className={style.MarketPlace_top}>
        <div className={style.container}>
          <div className={style.MarketPlace_top_header}>
            <h2>Browse Marketplace</h2>
            <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
            <div className={style.MarketPlace_top_searchbar}>
              <input
                name="search"
                id="search"
                placeholder="Search your favourite NFTs"
              />{" "}
              <CiSearch className={style.search_icon}></CiSearch>
            </div>
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.page_titles}>
          <div>Nfts</div>
          <div>Collections</div>
        </div>
      </div>
      <div className={style.MarketPlace_bottom}>
        <div className={style.bottom_cards}>
          {data.map((card) => (
            <Link to="/TheOrbitans">
              {" "}
              <div className={style.card}>
                <div className={style.card_img_part}>
                  <img src={card.img} alt="" />
                </div>
                <div className={style.card_info}>
                  <div className={style.card_info_top}>
                    <h5>{card.name}</h5>
                    <div className={style.card_info_artist}>
                      <img src={card.avatar} alt="" />
                      <p>{card.person}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
