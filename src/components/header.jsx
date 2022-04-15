import React, { Component } from "react";
import "../css/header.css";
import avatar from "../images/g1.jpeg";
import menu from "../images/menu.svg";
import voiceSearch from "../images/keyboard-voice.svg";
class Header extends Component {
  render() {
    const handleHeaderTab = () => {
      const headerTab = this.props.headerTab;
      if (headerTab === "Movies") {
        return (
          <div className="headerTab">
            <span className="headerTabActive">For you</span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        );
      } else if (headerTab === "Books") {
        return (
          <div className="headerTab">
            <span className="books"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        );
      } else {
        return (
          <div className="headerTab">
            <span className="headerTabActive">For you</span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        );
      }
    };
    return (
      <header className="header">
        <div className="inputHeader">
          <img src={menu} alt="menu" onClick={this.props.showMenu} />
          <input type="text" placeholder={this.props.placeholder} />
          <img src={voiceSearch} alt="voice search" className="voiceSearch" />
          <img src={g1} alt="" className="avatar" />
        </div>
        {handleHeaderTab()}
      </header>
    );
  }
}

export default Header;
