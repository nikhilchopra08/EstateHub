import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import homeImage from "../../assets/home-img.png";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Minter from "./Minter";
import Gallery from "./Gallery";
import { opend } from "../../../declarations/opend";
import CURRENT_USER_ID from "../index";
import image from '../../assets/home.jpg'

function Header() {
  const [userOwnedGallery, setOwnedGallery] = useState();
  const [listingGallery, setListingGallery] = useState();

  async function getNFTs() {
    const userNFTIds = await opend.getOwnedNFTs(CURRENT_USER_ID);
    console.log(userNFTIds);
    setOwnedGallery(
      <Gallery title="My Properties" ids={userNFTIds} role="collection" />
    );

    const listedNFTIds = await opend.getListedNFTs();
    console.log(listedNFTIds);
    setListingGallery(
      <Gallery title="Properties" ids={listedNFTIds} role="discover" />
    );
  }

  useEffect(() => {
    getNFTs();
  }, []);

  return (
    <BrowserRouter forceRefresh={true}>
      <div className="app-root-1">
        <header className="Paper-root AppBar-root AppBar-positionStatic AppBar-colorPrimary Paper-elevation4">
          <div className="Toolbar-root Toolbar-regular header-appBar-13 Toolbar-gutters">
            <div className="header-left-4"></div>
            <div className="header-logo-11"></div>
            <div className="header-vertical-9"></div>
            <Link to="/Image">
              <h5 className="Typography-root header-logo-text">EstateHub</h5>
            </Link>
            <div className="header-empty-6"></div>
            <div className="header-space-8"></div>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/discover">Listed RealEstate</Link>
            </button>
            {/* <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/minter">Minter</Link>
            </button> */}
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/collection">My Investments</Link>
            </button>
          </div>
        </header>
      </div>
      <Switch>
        <Route exact path="/Image">
          <img className="bottom-space" src={image} />
        </Route>
        <Route path="/Image">
          <Image/>
        </Route>
        <Route path="/discover">{listingGallery}</Route>
        <Route path="/minter">
          <Minter />
        </Route>
        <Route path="/collection">{userOwnedGallery}</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
