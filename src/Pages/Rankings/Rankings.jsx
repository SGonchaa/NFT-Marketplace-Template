import React from "react";
import style from "./styles/Rankings.module.scss";
import Artist from "../../Images/artist.png";

function Rankings() {
  var data = [
    {
      number: "1",
      name: "Jaydon Ekstrom Bothman",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-5@2x.png",
    },
    {
      number: "2",
      name: "Ruben Carder",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-6@2x.png",
    },
    {
      number: "3",
      name: "Alfredo Septimus",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-7@2x.png",
    },
    {
      number: "4",
      name: "Davis Franci",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-8@2x.png",
    },
    {
      number: "5",
      name: "Livia Rosser",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-9@2x.png",
    },
    {
      number: "6",
      name: "Kianna Donin",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-16@2x.png",
    },
    {
      number: "7",
      name: "Phillip Lipshutz",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-17@2x.png",
    },
    {
      number: "8",
      name: "Maria Rosser",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-126@2x.png",
    },
    {
      number: "9",
      name: "Kianna Stanton",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-127@2x.png",
    },
    {
      number: "10",
      name: "Angel Lubin",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-128@2x.png",
    },
    {
      number: "11",
      name: "Allison Torff",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-129@2x.png",
    },
    {
      number: "12",
      name: "Davis Workman",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-130@2x.png",
    },
    {
      number: "13",
      name: "Lindsey Lipshutz",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-131@2x.png",
    },
    {
      number: "14",
      name: "Randy Carder",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-132@2x.png",
    },
    {
      number: "15",
      name: "Lydia Culhane",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-133@2x.png",
    },
    {
      number: "16",
      name: "Rayna Bator",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-134@2x.png",
    },
    {
      number: "17",
      name: "Jocelyn Westervelt",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-135@2x.png",
    },
    {
      number: "18",
      name: "Marilyn Torff",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-5@2x.png",
    },
    {
      number: "19",
      name: "Skylar Levin",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-128@2x.png",
    },
    {
      number: "20",
      name: "Terry Dorwart",
      img:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-7@2x.png",
    },
  ];
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
          {data.map((tables_row) => (
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
