import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Menubar from "./menu";
import Games from "./games";
import Apps from "./apps";
import Movies from "./movies";
import Books from "./books";
import "../css/mainApp.css";
class App extends Component {
  state = {
    activeTab: <Games />,
    headerTab: "Games",
    placeholder: "Search for apps & games",
  };
  handleShowMenu = () => {
    const menuShow = document.getElementsByClassName("menuBar")[0];
    menuShow.classList.remove("menuHide");
    menuShow.classList.add("menuShow");
  };
  handleHideMenu = () => {
    const menuHide = document.getElementsByClassName("menuBar")[0];
    menuHide.classList.remove("menuShow");
    menuHide.classList.add("menuHide");
  };
  handleTabChange = (e) => {
    const id = e.target.id;
    switch (id) {
      case "Games":
        this.setState({
          activeTab: <Games />,
          HeaderTab: "Games",
          placeholder: "Search for Apps & games",
        });
        break;
      case "Apps":
        this.setState({
          activeTab: <Apps />,
          HeaderTab: "Apps",
          placeholder: "Search for apps & games",
        });
        break;
      case "Movies":
        this.setState({
          activeTab: <Movies />,
          HeaderTab: "Movies",
          placeholder: "Search for movies & TV",
        });
        break;
      case "Books":
        this.setState({
          activeTab: <Books />,
          HeaderTab: "Books",
          placeholder: "Search books",
        });
        break;
      default:
        this.setState({
          activeTab: <Games />,
          HeaderTab: "Games",
          placeholder: "Search for apps & games",
        });
    }
  };
  render() {
    return (
      <div className="mobile">
        <Menubar hideMenu={this.handleHideMenu} />
        <Header
          showMenu={this.handleShowMenu}
          headerTab={this.state.HeaderTab}
          placeholder={this.state.placeholder}
        />
        {this.state.activeTab}
        <Footer onTabChange={this.handleTabChange} />
      </div>
    );
  }
}

export default App;
