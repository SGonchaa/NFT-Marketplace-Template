import React from "react";
import style from "./styles/Homepage.module.scss";
import DiscoverArt from "../../Components/HomePageComponents/DiscoverArt/DiscoverArt";
import TrendingCollection from "../../Components/HomePageComponents/TrendingCollection/TrendingCollection";
import TopCreators from "../../Components/HomePageComponents/TopCreators/TopCreators";
import BrowseCategories from "../../Components/HomePageComponents/BrowseCategories/BrowseCategories";
import MoreNfts from "../../Components/HomePageComponents/MoreNfts/MoreNfts";
import MagicMashrooms from "../../Components/HomePageComponents/MagicMashrooms/MagicMashrooms";
import HowitWorks from "../../Components/HomePageComponents/HowitWorks/HowitWorks";
import Join from "../../Components/HomePageComponents/Join/Join"

function Homepage() {
  return (
    <>
      <div className={style.home}>
        <DiscoverArt />
        <TrendingCollection />
        <TopCreators />
        <BrowseCategories/>
        <MoreNfts />
        <MagicMashrooms />
        <HowitWorks />
        <Join />
      </div>
    </>
  );
}

export default Homepage;
