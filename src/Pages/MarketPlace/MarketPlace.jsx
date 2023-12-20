import React, { useState } from "react";
import style from "./styles/MarketPlace.module.scss";
import { Link } from "react-router-dom";
import { MarketPlaceData } from "./meta/MarketPlaceData";
import { CiSearch } from "react-icons/ci";

function MarketPlace() {
  const [status, setStatus] = useState(true);
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
          <div
            onClick={() => {
              setStatus(true);
            }}
            style={status ? { borderBottom: "2px solid #858584" } : null}
          >
            Nfts
          </div>
          <div
            onClick={() => {
              setStatus(false);
            }}
            style={!status ? { borderBottom: "2px solid #858584" } : null}
          >
            Collections
          </div>
        </div>
      </div>
      <div className={style.MarketPlace_bottom}>
        {status === true ? (
          <div className={style.bottom_cards}>
            {MarketPlaceData.slice(0, status ? 6 : MarketPlaceData.length).map(
              (card) => (
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
              )
            )}
          </div>
        ) : (
          <div className={style.bottom_cards}>
            {data.slice(6, !status ? 12 : data.length).map((card) => (
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
        )}
      </div>
    </div>
  );
}

export default MarketPlace;
