import React from "react";
import style from "./styles/TheOrbitians.module.scss";
import { Link } from "react-router-dom";
import { TheOrbitiansData } from "./meta/TheOrbitiansData";
import Orbitian from "../../Images/orbitianavatar.png";
import Globe from "../../Images/globe.svg";
import { FaArrowRightLong } from "react-icons/fa6";

function TheOrbitians() {
  return (
    <div className={style.TheOrbitians}>
      <div className={style.TheOrbitians_bg_img_part}></div>
      <div className={style.container}>
        <div className={style.details}>
          <div className={style.left_part}>
            <div className={style.left_part_header}>
              <h2>The Orbitians</h2>
              <p>Minted On Sep 30,2022</p>
            </div>
            <div className={style.created_by}>
              <h5>Created By</h5>
              <div className={style.avatar}>
                <img src={Orbitian} alt="" />
                Orbitian
              </div>
            </div>
            <div className={style.description}>
              <h5>Description</h5>
              <p>
                The Orbitians is a collection of 10,000 unique NFTs on the
                Ethereum blockchain
              </p>
              <p>
                There are all sorts of beings in the NFT Universe. The most
                advanced and friendly of the bunch are Orbitians.
              </p>
              <p>
                They live in a metal space machines, high up in the sky and only
                have one foot on Earth. These Orbitians are a peaceful race, but
                they have been at war with a group of invaders for many
                generations. The invaders are called Upside-Downs, because of
                their inverted bodies that live on the ground, yet do not know
                any other way to be. Upside-Downs believe that they will be able
                to win this war if they could only get an eye into Orbitian
                territory, so they've taken to make human beings their target.
              </p>
            </div>
            <div className={style.details_view_part}>
              <h5>Details</h5>
              <div className={style.view}>
                <img src={Globe} alt="" />
                View on Etherscan
              </div>
              <div className={style.view}>
                <img src={Globe} alt="" />
                View Original
              </div>
            </div>
            <div className={style.tags}>
              <h5>Tags</h5>
              <button>ANIMATION</button>
              <button>ILLUSTRATION</button>
              <button>MOON</button>
              <button>MOON</button>
            </div>
          </div>
          <div className={style.right_part}></div>
        </div>
        <div className={style.Artist_headline}>
          <div className={style.Artist_headline_title}>
            <h3>More From This Artist</h3>
          </div>
          <div className={style.go_to_btn}>
            <Link to="/AnimaKid">
              <button>
                <FaArrowRightLong
                  className={style.go_to_icon}
                ></FaArrowRightLong>
                Go To Artist Page
              </button>
            </Link>
          </div>
        </div>
        <div className={style.Artist_cards}>
          {TheOrbitiansData.map((card) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default TheOrbitians;
