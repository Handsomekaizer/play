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
        {
          id: 5,
          img: "/games_img/recommended/real-racing.webp",
          desc: "Real Racing 3",
          size: "42 MB",
        },
        {
          id: 6,
          img: "/games_img/recommended/subway-surfers.webp",
          desc: "Subway Surfers",
          size: "105 MB",
        },
      ],
      editors: [
        {
          id: 1,
          img: "/games_img/editors-choice/asphalt-9.webp",
          desc: "Asphalt 9:Legends - Epic Arcade Car Racing Game",
          size: "2.0 GB",
        },
        {
          id: 2,
          img: "/games_img/editors-choice/bricks-breaker.webp",
          desc: "Bricks Breaker Quest",
          size: "37 MB",
        },
        {
          id: 3,
          img: "/games_img/editors-choice/homescapes.webp",
          desc: "HomeScapes",
          size: "152 MB",
        },
        {
          id: 4,
          img: "/games_img/editors-choice/kick-the-buddy.webp",
          desc: "Kick the Buddy",
          size: "96 MB",
        },
        {
          id: 5,
          img: "/games_img/editors-choice/roll-the-ball.webp",
          desc: "Roll the Ball",
          size: "44 MB",
        },
        {
          id: 6,
          img: "/games_img/editors-choice/township.webp",
          desc: "Township",
          size: "155 MB",
        },
      ],
      multiplayer: [
        {
          id: 1,
          img: "/games_img/multiplayer/art-of-war.webp",
          desc: "Art of War: Legions",
          size: "141 MB",
        },
        {
          id: 2,
          img: "/games_img/multiplayer/chess-royale.webp",
          desc: "Chess Royale: Play Online",
          size: "82 MB",
        },
        {
          id: 3,
          img: "/games_img/multiplayer/clash-of-clans.webp",
          desc: "Clash of Clans",
          size: "154 MB",
        },
        {
          id: 4,
          img: "/games_img/multiplayer/coin-master.webp",
          desc: "Coin Master",
          size: "61 MB",
        },
        {
          id: 5,
          img: "/games_img/multiplayer/top-war.webp",
          desc: "Top War: Battle Game",
          size: "156 MB",
        },
        {
          id: 6,
          img: "/games_img/multiplayer/world-war-heroes.webp",
          desc: "World War Heroes: WW2 FPS",
          size: "697 MB",
        },
      ],
      offline: [
        {
          id: 1,
          img: "/games_img/offline/archers-2.webp",
          desc: "The Archers 2:Ragdoll with Bow masters (pvp)",
          size: "53 MB",
        },
        {
          id: 2,
          img: "/games_img/offline/castle-crush.webp",
          desc: "Castle Crush: War Battle - Free Strategy Games",
          size: "87 MB",
        },
        {
          id: 3,
          img: "/games_img/offline/plant-vs-zombies.webp",
          desc: "Plants vs. Zombies FREE",
          size: "98 MB",
        },
        {
          id: 4,
          img: "/games_img/offline/simcity.webp",
          desc: "SimCity BuildIt",
          size: "137 MB",
        },
        {
          id: 5,
          img: "/games_img/offline/stick-war.webp",
          desc: "Stick War: Legacy",
          size: "103 MB",
        },
        {
          id: 6,
          img: "/games_img/offline/xtreme-car.webp",
          desc: "Extreme Car Driving Simulation",
          size: "71 MB",
        },
      ],
      sports: [
        {
          id: 1,
          img: "/games_img/sports/archery-king.webp",
          desc: "Archery King",
          size: "78 MB",
        },
        {
          id: 2,
          img: "/games_img/sports/baseball-9.webp",
          desc: "BASEBALL 9",
          size: "120 MB",
        },
        {
          id: 3,
          img: "/games_img/sports/efootball.webp",
          desc: "eFootball PES 2021",
          size: "1.7 GB",
        },
        {
          id: 4,
          img: "/games_img/sports/head-ball-2.webp",
          desc: "Head Ball 2",
          size: "98 MB",
        },
        {
          id: 5,
          img: "/games_img/sports/soccer-super-star.webp",
          desc: "Soccer Super Star",
          size: "96 MB",
        },
        {
          id: 6,
          img: "/games_img/sports/wcc3.webp",
          desc: "World Cricket Championship 3 - WCC3",
          size: "644 MB",
        },
      ],
      strategy: [
        {
          id: 1,
          img: "/games_img/strategy/alien-creeps.webp",
          desc: "Alien Creeps TD - Epic Tower defense",
          size: "100 MB",
        },
        {
          id: 2,
          img: "/games_img/strategy/castle-clash.webp",
          desc: "Castle Clash: Guide Royale",
          size: "559 MB",
        },
        {
          id: 3,
          img: "/games_img/strategy/conquerors.webp",
          desc: "Conquerors: Golden Age",
          size: "285 MB",
        },
        {
          id: 4,
          img: "/games_img/strategy/game-of-warriors.webp",
          desc: "Game of Warriors",
          size: "60 MB",
        },
        {
          id: 5,
          img: "/games_img/strategy/last-shelter.webp",
          desc: "Last Shelter: Survival",
          size: "292 MB",
        },
        {
          id: 6,
          img: "/games_img/strategy/rise-of-empires.webp",
          desc: "Rise of Empires: Ice and Fire",
          size: "344 MB",
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
