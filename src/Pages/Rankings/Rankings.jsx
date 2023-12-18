import React from "react";
import style from "./styles/Rankings.module.scss";

function Rankings() {
  return (
    <div className={style.Rankings}>
      <div className={style.Rankings_top}>
        <div className={style.container}>
          <div className={style.Rankings_top_header}>
            <h2>Browse Marketplace</h2>
            <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.page_titles}>
          <div>Today</div>
          <div>This Week</div>
          <div>This Month</div>
          <div>All Time</div>
        </div>
      </div>
    </div>
  );
}

export default Rankings;
