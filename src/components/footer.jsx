import React, { Component } from "react";
import "../css/footer.css";
import gameIcon from "../images/pad.svg";
import appIcon from "../images/grid.svg";
import movieIcon from "../images/local_movies_grey_24x24.png";
import bookIcon from "../images/icons8-book-24.png";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div onClick={(e) => this.props.onTabChange(e)} id="Games">
          <img src={appIcon} alt="" id="Games" />
          <span id="Games">Apps</span>
        </div>
        <div onClick={(e) => this.props.onTabChange(e)} id="Apps">
          <img src={appIcon} alt="" id="Apps" />
          <span id="Apps"></span>
        </div>
        <div onClick={(e) => this.props.onTabChange(e)} id="Movies">
          <img src={appIcon} alt="" id="Movies" />
          <span id="Movies"></span>
        </div>
        <div onClick={(e) => this.props.onTabChange(e)} id="#">
          <img src={appIcon} alt="" id="Books" />
          <span id="Books"></span>
        </div>
      </footer>
    );
  }
}

export default Footer;
