import React from "react";
import style from "./styles/MagicMashrooms.module.scss";
import { Link } from "react-router-dom";
import Shroomie from "../../../Images/shroomie.png";
import { IoEyeOutline } from "react-icons/io5";

function MagicMashrooms() {
  return (
    <div className={style.MagicMashrooms}>
      <div className={style.MagicMashrooms_bg}>
        {" "}
        <div className={style.container}>
          <div className={style.MagicMashrooms_info}>
            {" "}
            <div className={style.text_btn_part}>
              <Link to="/AnimaKid">
                {" "}
                <div className={style.shroomie_btn}>
                  <button>
                    <img src={Shroomie} alt="" />
                    Shroomie
                  </button>
                </div>
              </Link>
              <h1>Magic Mahrooms</h1>
              <Link to="/TheOrbitans">
                {" "}
                <div className={style.seenft_btn}>
                  <button>
                    <IoEyeOutline className={style.see_icon}></IoEyeOutline>
                    See NFT
                  </button>
                </div>
              </Link>
            </div>
            <div className={style.date_part}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MagicMashrooms;
