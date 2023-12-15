import React from "react";
import style from "./styles/ConnectWallet.module.scss";
import connectWallet from "../../Images/connecwallet.png";
import MetaMask from "../../Images/MetaMask.png";
import WalletConnect from "../../Images/WalletConnect.png";
import Coinbase from "../../Images/Coinbase.png";

function ConnectWallet() {
  return (
    <div className={style.ConnectWallet}>
      <div className={style.ConnectWallet_info}>
        <div className={style.left_part}>
          <img src={connectWallet} alt="" />
        </div>
        <div className={style.right_part}>
          <div className={style.right_part_detail}>
            <div className={style.right_part_title}>
              <h2>Connect Wallet</h2>
              <p>
                Choose a wallet you want to connect. There are several wallet
                providers.
              </p>
            </div>
            <div className={style.wallet}>
              <img src={MetaMask} alt="" />
              <h5>Metamask</h5>
            </div>
            <div className={style.wallet}>
              <img src={WalletConnect} alt="" />
              <h5>Wallet Connect</h5>
            </div>
            <div className={style.wallet}>
              <img src={Coinbase} alt="" />
              <h5>Coinbase</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
