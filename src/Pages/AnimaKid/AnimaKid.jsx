import React from "react";
import style from "./styles/AnimaKid.module.scss";
import { BiCopy } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import AnimakidBg from "../../Images/animakidbg.png";
import AnimakidAvatar from "../../Images/animakidavatar.png";
import Globe from "../../Images/globe.svg";
import Anima from "../../Images/anima.svg";
import YouTube from "../../Images/youtube.svg";
import Twitter from "../../Images/twitter.svg";
import Instagram from "../../Images/instagram.svg";
import { Link } from "react-router-dom";

function AnimaKid() {
  var data = [
    {
      name: "Distant Galaxy",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-5@2x.png",
      person: "Animakid",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-33@2x.png",
    },
    {
      name: "Life On Edena",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-6@2x.png",
      person: "Animakid",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-33@2x.png",
    },
    {
      name: "Astrofiction",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-86@2x.png",
      person: "Animakid",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-33@2x.png",
    },
    {
      name: "Cryptocity",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-87@2x.png",
      person: "Animakid",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-33@2x.png",
    },
    {
      name: "Colorfuldog 0524",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-88@2x.png",
      person: "Animakid",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-33@2x.png",
    },
    {
      name: "Space Tales",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-89@2x.png",
      person: "Animakid",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-33@2x.png",
    },
    {
      name: "Cherry Blossom Girl 037",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-90@2x.png",
      person: "Animakid",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-33@2x.png",
    },
    {
      name: "Dancing Robots 0987",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-91@2x.png",
      person: "Animakid",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-33@2x.png",
    },
    {
      name: "Icecream Ape",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-92@2x.png",
      person: "Animakid",
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-33@2x.png",
    },
  ];
  return (
    <div className={style.AnimaKid}>
      <div className={style.AnimaKid_top}>
        <img src={AnimakidBg} alt="" />{" "}
        <div className={style.container}>
          <div className={style.avatar_profile}>
            <img src={AnimakidAvatar} alt="" />
          </div>
          <div className={style.details}>
            <div className={style.details_left_part}>
              <h2>Animakid</h2>
              <div className={style.additional_info}>
                <div className={style.info}>
                  250k+
                  <div className={style.title}>Volume</div>
                </div>
                <div className={style.info}>
                  50+
                  <div className={style.title}>Nfts Sold</div>
                </div>
                <div className={style.info}>
                  3000+
                  <div className={style.title}>Followers</div>
                </div>
              </div>
              <div className={style.bio_links}>
                <div className={style.bio}>
                  <h5>Bio</h5>
                  <p>The Internet's Friendliest Designer Kid.</p>
                </div>
                <div className={style.links}>
                  <h5>Links</h5>
                  <div className={style.links_logo}>
                    <img src={Globe} alt="" />
                    <img src={Anima} alt="" />
                    <img src={YouTube} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Instagram} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.details_right_part}>
              <button>
                <BiCopy className={style.btn_icon}></BiCopy>
                0xc0E3...B79C
              </button>
              <button>
                <FaPlus className={style.btn_icon}></FaPlus>
                Follow
              </button>
            </div>
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.page_titles}>
          <div>Created</div>
          <div>Owned</div>
          <div>Collection</div>
        </div>
      </div>
      <div className={style.AnimaKid_bottom}>
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

export default AnimaKid;
