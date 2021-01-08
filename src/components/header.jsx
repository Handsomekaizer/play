import React, { Component } from "react";
import "../css/header.css";
import avatar from "../images/avatar.jpg";
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
            <span>Top Selling</span>
            <span>New releases</span>
            <span>Genres</span>
            <span>Studios</span>
          </div>
        );
      } else if (headerTab === "Books") {
        return (
          <div className="headerTab">
            <span className="books">Ebooks</span>
            <span>Audiobooks</span>
            <span>Comics</span>
            <span>Genres</span>
            <span>Top selling</span>
            <span>New Releases</span>
            <span>Top free</span>
          </div>
        );
      } else {
        return (
          <div className="headerTab">
            <span className="headerTabActive">For you</span>
            <span>Top charts</span>
            <span>Events</span>
            <span>Premium</span>
            <span>Categories</span>
            <span>Children</span>
            <span>Editor's Choice</span>
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
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
        {handleHeaderTab()}
      </header>
    );
  }
}

export default Header;
