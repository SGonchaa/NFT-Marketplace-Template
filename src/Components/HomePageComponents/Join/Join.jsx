import React from "react";
import style from "./styles/Join.module.scss";
import JoinImg from "../../../Images/joinimg.png";
import { FaRegEnvelope } from "react-icons/fa";

function Join() {
  return (
    <div className={style.Join}>
      <div className={style.container}>
          {" "}
          <div className={style.img_part}>{<img src={JoinImg} alt="" />}</div>
          <div className={style.text_email_part}>
            <div className={style.text}>
              <h3>Join Our Weekly Digest</h3>
              <p>Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
            </div>
            <div className={style.email}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email here"
              />
              <button>
                <FaRegEnvelope className={style.subscribe_icon}></FaRegEnvelope>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Join;
