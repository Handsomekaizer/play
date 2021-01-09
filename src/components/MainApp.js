import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Menubar from "./menu";
import Games from "./games";
import Apps from "./apps";
import Movies from "./movies";
import Books from "./books";
import AppInfo from "./appInfo";
import "../css/mainApp.css";
class App extends Component {
  handlePageState = (img, name, size) => {
    this.setState({
      activePage: "appInfo",
      imgIcon: img,
      appName: name,
      appSize: size,
    });
  };
  state = {
    activeTab: <Games onPageChange={this.handlePageState} />,
    beforeUpdate: <Games onPageChange={this.handlePageState} />,
    headerTab: "Games",
    placeholder: "Search for apps & games",
    activePage: "Homepage",
    imgIcon: null,
    appName: null,
    appSize: null,
  };
  handleBack = () => {
    this.setState({
      activePage: "Homepage",
      activeTab: this.state.beforeUpdate,
    });
  };
  handlePageRender = () => {
    if (this.state.activePage === "Homepage") {
      return (
        <div className="mobile">
          <Menubar hideMenu={this.handleHideMenu} />
          <Header
            showMenu={this.handleShowMenu}
            headerTab={this.state.HeaderTab}
            placeholder={this.state.placeholder}
          />
          {this.state.activeTab}
          {/* <Games onPageChange={this.handlePageState} /> */}
          <Footer onTabChange={this.handleTabChange} />
        </div>
      );
    } else {
      return (
        <AppInfo
          onBack={this.handleBack}
          imgIcon={this.state.imgIcon}
          name={this.state.appName}
          size={this.state.appSize}
        />
      );
    }
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
          activeTab: <Games onPageChange={this.handlePageState} />,
          beforeUpdate: <Games onPageChange={this.handlePageState} />,
          HeaderTab: "Games",
          placeholder: "Search for Apps & games",
        });
        break;
      case "Apps":
        this.setState({
          activeTab: <Apps onPageChange={this.handlePageState} />,
          beforeUpdate: <Apps onPageChange={this.handlePageState} />,
          HeaderTab: "Apps",
          placeholder: "Search for apps & games",
        });
        break;
      case "Movies":
        this.setState({
          activeTab: <Movies onPageChange={this.handlePageState} />,
          beforeUpdate: <Movies onPageChange={this.handlePageState} />,
          HeaderTab: "Movies",
          placeholder: "Search for movies & TV",
        });
        break;
      case "Books":
        this.setState({
          activeTab: <Books onPageChange={this.handlePageState} />,
          beforeUpdate: <Books onPageChange={this.handlePageState} />,
          HeaderTab: "Books",
          placeholder: "Search books",
        });
        break;
      default:
        this.setState({
          activeTab: <Games onPageChange={this.handlePageState} />,
          beforeUpdate: <Games onPageChange={this.handlePageState} />,
          HeaderTab: "Games",
          placeholder: "Search for Apps & games",
        });
    }
  };
  render() {
    /* console.log(this.state.imgIcon); */
    return <div>{this.handlePageRender()}</div>;
  }
}

export default App;
