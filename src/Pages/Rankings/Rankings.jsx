import React from "react";
import style from "./styles/Rankings.module.scss";
import { RankingsData } from "./meta/RankingsData";

function Rankings() {
  return (
    <div className={style.Rankings}>
      <div className={style.container}>
        <div className={style.Rankings_top}>
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
        <div className={style.Rankings_bottom}>
          <div className={style.tables_header}>
            <div className={style.tables_header_left_part}>
              <div>
                <span>#</span>
                Artist
              </div>
            </div>
            <div className={style.tables_header_right_part}>
              <div>Change</div>
              <div>NFTs Sold</div>
              <div>Volume</div>
            </div>
          </div>
          {RankingsData.map((tables_row) => (
            <div className={style.tables_row}>
              <div className={style.tables_row_left_part}>
                <div className={style.artist}>
                  <span>{tables_row.number}</span>
                  <div className={style.artist}>
                    {" "}
                    <img src={tables_row.img} alt="" />
                    <h5>{tables_row.name}</h5>
                  </div>
                </div>
              </div>
              <div className={style.tables_row_right_part}>
                <div style={{ color: "#00AC4F" }}>+1.41%</div>
                <div>602</div>
                <div>12.4 ETH</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rankings;
