import React from "react";
import style from "./styles/BrowseCategories.module.scss";
import { Link } from "react-router-dom";
import { BrowseCategoriesData } from "./Meta/BrowseCategoriesData";
function BrowseCategories() {
  return (
    <div className={style.BrowseCategories}>
      <div className={style.container}>
        <div className={style.BrowseCategories_headline}>
          <div className={style.BrowseCategories_headline_title}>
            <h3>Browse Categories</h3>
          </div>
        </div>
        <div className={style.BrowseCategories_card}>
          {BrowseCategoriesData.map((card) => (
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
