import React, { Component } from "react";
import "../css/appInfo.css";
import back from "../images/left-arrow.svg";
import search from "../images/search.svg";
import more from "../images/more.svg";
import download from "../images/download.svg";
class AppInfo extends Component {
  state = {};
  render() {
    /* console.log(this.props.imgIcon); */
    const appImages = [
      "/apps-img/app-img/canva/canva1.webp",
      "/apps-img/app-img/canva/canva2.webp",
      "/apps-img/app-img/canva/canva3.webp",
      "/apps-img/app-img/canva/canva4.webp",
      "/apps-img/app-img/canva/canva5.webp",
      "/apps-img/app-img/canva/canva6.webp",
      "/apps-img/app-img/canva/canva7.webp",
      "/apps-img/app-img/canva/canva8.webp",
    ];
    return (
      <div className="infoContainer">
        <div className="infoHeader">
          <button onClick={this.props.onBack} className="back">
            <img src={back} alt="" />
          </button>
          <div>
            <span>
              <img src={search} alt="" />
            </span>
            <span>
              <img src={more} alt="" />
            </span>
          </div>
        </div>
        <div className="infoBody">
          <div className="appInfo">
            <div className="appIcon">
              <img src={process.env.PUBLIC_URL + this.props.imgIcon} alt="" />
            </div>
            <div className="appDesc">
              <p className="appName">{this.props.name}</p>
              <p className="companyName">DApps Platform, Inc</p>
              <p className="ad"></p>
            </div>
          </div>
          <div className="appReview">
            <div className="rating">
              <p className="numRating first">4.4★</p>
              <p className="second">918K reviews</p>
            </div>
            <div className="sizeContainer">
              <p className="downloadIcon">
                <img src={download} alt="" />
              </p>
              <p className="second">{this.props.size}</p>
            </div>
            <div className="ageRating">
              <p className="age first">
                <span>3+</span>
              </p>
              <p className="second">Rated for 3+</p>
            </div>
            <div className="downloadsContainer">
              <p className="first">10M+</p>
              <p className="second">Downloads</p>
            </div>
          </div>
          <div className="installBtn">
            <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='http://google.com';
      }}> Install</button>
          </div>
          <div className="appScreenshots">
            {appImages.map((a) => {
              return <img src={process.env.PUBLIC_URL + a} alt="" />;
            })}
          </div>
          <div className="aboutApp">
            <div className="title">
              <h4>About this app</h4>
            </div>
            <div className="content">
              <p>
                Binance Official Crypto Wallet: Store Bitcoin
                Ethereum,Litecoin, XRP, BNB, NFT
              </p>
            </div>
            <div className="tags">
              <span>Art & Design</span>
              <span>Finance</span>
            </div>
          </div>
          <div className="ratingAndReview">
            <div className="title">
              <h4>Ratings and reviews</h4>
            </div>
            <div className="rate">
              <div className="num">
                <p className="number">4.4</p>
                <p className="star">★★★★</p>
                <p className="noOfrating">918,877</p>
              </div>
              <div className="bar">
                <div className="bar-five">
                  <span>5</span>
                  <div className="meter">
                    <span className="fill"></span>
                  </div>
                </div>
                <div className="bar-four">
                  <span>4</span>
                  <div className="meter">
                    <span className="fill"></span>
                  </div>
                </div>
                <div className="bar-three">
                  <span>3</span>
                  <div className="meter">
                    <span className="fill"></span>
                  </div>
                </div>
                <div className="bar-two">
                  <span>2</span>
                  <div className="meter">
                    <span className="fill"></span>
                  </div>
                </div>
                <div className="bar-one">
                  <span>1</span>
                  <div className="meter">
                    <span className="fill"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="publicReview"></div>
          </div>
        </div>
       <div className="appFooter">
          <p></p>
          <div className="socialMedia">
          </div>
        </div>
      </div>
    );
  }
}

export default AppInfo;
