import React from "react";
import style from "./styles/SignUp.module.scss";
import signupImg from "../../Images/signupImg.png";
import User from "../../Images/User.png";
import Email from "../../Images/EnvelopeSimple.png";
import Lock from "../../Images/LockKey.png";

function SignUp() {
  return (
    <div className={style.SignUp}>
      <div className={style.SignUp_info}>
        <div className={style.left_part}>
          <img src={signupImg} alt="" />
        </div>
        <div className={style.right_part}>
          <div className={style.right_part_detail}>
            <div className={style.right_part_title}>
              <h2>Create Account</h2>
              <p>
                Welcome! enter your details and start creating, collecting and
                selling NFTs.
              </p>
            </div>
            <div className={style.create_form}>
              <div className={style.input}>
                <img src={User} alt="" />
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div className={style.input}>
                <img src={Email} alt="" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
              </div>
              <div className={style.input}>
                <img src={Lock} alt="" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className={style.input}>
                <img src={Lock} alt="" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Confirm Password"
                />
              </div>
              <button>Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
