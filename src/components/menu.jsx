import React, { Component } from "react";
import "../css/mainApp.css";
class Menubar extends Component {
  render() {
    return (
      <aside className="menuBar menuHide">
        <div className="content">
          <img
            src={process.env.PUBLIC_URL + "menuImages/remove.svg"}
            alt=""
            className="menuClose"
            onClick={this.props.hideMenu}
          />
          <header className="menuHeader">
            <img
              src={process.env.PUBLIC_URL + "menuImages/play-store.svg"}
              alt=""
            />
            <span>Google Play</span>
          </header>
          <hr className="hr" />
          <p>
            <img
              src={process.env.PUBLIC_URL + "menuImages/apps.svg"}
              alt="apps"
            />
            <span>My apps & games</span>
          </p>
          <p>
            <img
              src={process.env.PUBLIC_URL + "menuImages/bell.svg"}
              alt="notification"
            />
            <span>Notifications</span>
          </p>
          <p>
            <img src={process.env.PUBLIC_URL + "menuImages/sync.svg"} alt="" />
            <span>Subscriptions</span>
          </p>
          <p>
            <img
              src={process.env.PUBLIC_URL + "menuImages/bookmark.svg"}
              alt=""
            />
            <span>Wishlist</span>
          </p>
          <hr className="hr" />
          <p>
            <img src={process.env.PUBLIC_URL + "menuImages/user.svg"} alt="" />
            <span>Account</span>
          </p>
          <p className="payment">
            <img
              src={process.env.PUBLIC_URL + "menuImages/credit-card.svg"}
              alt=""
            />
            <span>Payment methods</span>
          </p>
          <p>
            <img
              src={process.env.PUBLIC_URL + "menuImages/play_protect.png"}
              alt=""
            />
            <span>Play Protect</span>
          </p>
          <p>
            <img
              src={process.env.PUBLIC_URL + "menuImages/setting.svg"}
              alt=""
            />
            <span>Settings</span>
          </p>
          <hr className="hr" />
          <p>
            <img
              src={process.env.PUBLIC_URL + "menuImages/movies.png"}
              alt=""
            />
            <span>Open Movies app</span>
            <img
              src={process.env.PUBLIC_URL + "menuImages/exit.svg"}
              alt=""
              classname="float-right"
            />
          </p>
          <p>
            <img src={process.env.PUBLIC_URL + "menuImages/book.png"} alt="" />
            <span>Open Books app</span>
            <img
              src={process.env.PUBLIC_URL + "menuImages/exit.svg"}
              alt=""
              classname="float-right"
            />
          </p>
          <hr className="hr" />
          <p className="menuEnd">
            <span>Redeem</span>
          </p>
          <p className="menuEnd">
            <span>Help and feedback</span>
          </p>
          <p className="menuEnd">
            <span>Parent guide</span>
          </p>
          <p className="menuEnd">
            <span>About Google Play</span>
          </p>
        </div>
        {/* <div className="menuRem" onClick={this.props.hideMenu}></div> */}
      </aside>
    );
  }
}

export default Menubar;
