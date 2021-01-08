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
          <img src={gameIcon} alt="" id="Games" />
          <span id="Games">Games</span>
        </div>
        <div onClick={(e) => this.props.onTabChange(e)} id="Apps">
          <img src={appIcon} alt="" id="Apps" />
          <span id="Apps">Apps</span>
        </div>
        <div onClick={(e) => this.props.onTabChange(e)} id="Movies">
          <img src={movieIcon} alt="" id="Movies" />
          <span id="Movies">Movies</span>
        </div>
        <div onClick={(e) => this.props.onTabChange(e)} id="Books">
          <img src={bookIcon} alt="" id="Books" />
          <span id="Books">Books</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
