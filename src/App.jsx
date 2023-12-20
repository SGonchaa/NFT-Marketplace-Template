import React from "react";
import "../src/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar/Navbar";
import MarketPlace from "./Pages/MarketPlace/MarketPlace";
import Rankings from "./Pages/Rankings/Rankings";
import ConnectWallet from "./Pages/ConnectWallet/ConnectWallet";
import Footer from "./Components/Layout/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import TheOrbitians from "./Pages/TheOrbitians/TheOrbitians";
import SignUp from "./Pages/SignUp/SignUp";
import AnimaKid from "./Pages/AnimaKid/AnimaKid";


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/TheOrbitians" element={<TheOrbitians />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/AnimaKid" element={<AnimaKid />} />
            <Route path="/MarketPlace" element={<MarketPlace />} />
            <Route path="/Rankings" element={<Rankings />} />
            <Route path="/ConnectWallet" element={<ConnectWallet />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
