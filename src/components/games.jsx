import React, { Component } from "react";
import AppTemplate from "./appTemplate";
import "../css/appTemplate.css";
class Games extends Component {
  render() {
    const games = {
      recommended: [
        {
          id: 4,
          img: "/games_img/recommended/hunter-assassin.webp",
          desc: "Hunter Assassin",
          size: "43 MB",
        },
      ],
    };
    return (
      <div className="games">
        <div className="container">
          <h3 className="title">Recommended for You</h3>
          <div className="flexContainer">
            {games.recommended.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  size={a.size}
                  category={"games"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">Editor's Choice</h3>
          <div className="flexContainer">
            {games.editors.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  size={a.size}
                  category={"games"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">Multiplayer games</h3>
          <div className="flexContainer">
            {games.multiplayer.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  size={a.size}
                  category={"games"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">Offline games</h3>
          <div className="flexContainer">
            {games.offline.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  size={a.size}
                  category={"games"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">Sports games</h3>
          <div className="flexContainer">
            {games.sports.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  size={a.size}
                  category={"games"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
        <div className="container last">
          <h3 className="title">Strategy games</h3>
          <div className="flexContainer">
            {games.strategy.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  size={a.size}
                  category={"games"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
