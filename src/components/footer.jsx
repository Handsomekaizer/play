import React, { Component } from "react";
import "../css/footer.css";
import gameIcon from "../images/pad.svg";
import appIcon from "../images/sq.png";
import movieIcon from "../images/local_movies_grey_24x24.png";
import bookIcon from "../images/icons8-book-24.png";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div onClick={(e) => this.props.onTabChange(e)} id="#">
          <img src={appIcon} alt="" id="#" />
          <span id="Games"></span>
        </div>
        <div onClick={(e) => this.props.onTabChange(e)} id="#">
          <img src={appIcon} alt="" id="#" />
          <span id="#"></span>
        </div>
        <div onClick={(e) => this.props.onTabChange(e)} id="#">
          <img src={appIcon} alt="" id="#" />
          <span id="#"></span>
        </div>
        <div onClick={(e) => this.props.onTabChange(e)} id="#">
          <img src={appIcon} alt="" id="#" />
          <span id="#"></span>
        </div>
      </footer>
    );
  }
}

export default Footer;
