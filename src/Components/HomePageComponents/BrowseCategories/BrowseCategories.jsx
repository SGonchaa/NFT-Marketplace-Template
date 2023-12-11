import React from "react";
import style from "./styles/BrowseCategories.module.scss";
import { Link } from "react-router-dom";
function BrowseCategories() {
  var data = [
    {
      name: "Art",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-54@2x.png",
      icon:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/paintbrush-1@2x.svg",
    },
    {
      name: "Collectibles",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-55@2x.png",
      icon:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/swatches-1@2x.svg",
    },
    {
      name: "Music",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-56@2x.png",
      icon:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/musicnotes-1@2x.svg",
    },
    {
      name: "Photography",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-57@2x.png",
      icon:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/camera-1@2x.svg",
    },
    {
      name: "Video",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-58@2x.png",
      icon:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/videocamera-1@2x.svg",
    },
    {
      name: "Utility",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-59@2x.png",
      icon:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/magicwand-1@2x.svg",
    },
    {
      name: "Sport",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-60@2x.png",
      icon:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/magicwand-1@2x.svg",
    },
    {
      name: "Virtual Worlds",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-61@2x.png",
      icon:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/planet-1@2x.svg",
    },
  ];
  return (
    <div className={style.BrowseCategories}>
      <div className={style.container}>
        <div className={style.BrowseCategories_headline}>
          <div className={style.BrowseCategories_headline_title}>
            <h3>Browse Categories</h3>
          </div>
        </div>
        <div className={style.BrowseCategories_card}>
          {data.map((card) => (
            <Link to="/MarketPlace">
              {" "}
              <div className={style.card}>
                <div className={style.card_img_part}>
                  <div className={style.avatar}>
                    <img src={card.img} alt="" />
                  </div>
                  <div className={style.icon}>
                    <img src={card.icon} alt="" />
                  </div>
                </div>
                <div className={style.card_name}>
                  <h5>{card.name}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseCategories;
