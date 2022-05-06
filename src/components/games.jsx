import React, { Component } from "react";
import AppTemplate from "./appTemplate";
import "../css/appTemplate.css";
class Games extends Component {
  render() {
    const games = {
      recommended: [
        {
          id: 4,
          img: "/games_img/recommended/play.png",
          desc: "AutoClaim:Airdrop Automatic Claim Bot",
          size: "1 MB",
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
      </div>
    );
  }
}

export default Games;
