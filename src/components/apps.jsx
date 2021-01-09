import React, { Component } from "react";
import AppTemplate from "./appTemplate";
import "../css/appTemplate.css";
class Apps extends Component {
  render() {
    const apps = {
      recommended: [
        {
          id: 1,
          img: "/apps-img/recommended/linkedln.webp",
          desc: "LinkedLn: Job Search",
          size: "28 MB",
        },
        {
          id: 2,
          img: "/apps-img/recommended/microsoft-office.webp",
          desc: "Microsoft office",
          size: "86 MB",
        },
        {
          id: 3,
          img: "/apps-img/recommended/pinterest.webp",
          desc: "Pinterest",
          size: "21 MB",
        },
        {
          id: 4,
          img: "/apps-img/recommended/snapchat.webp",
          desc: "Snapchat",
          size: "59 MB",
        },
        {
          id: 5,
          img: "/apps-img/recommended/telegramX.webp",
          desc: "Telegram X",
          size: "18 MB",
        },
        {
          id: 6,
          img: "/apps-img/recommended/twitter.webp",
          desc: "Twitter",
          size: "19 MB",
        },
      ],
      education: [
        {
          id: 1,
          img: "/apps-img/educational/brainly.webp",
          desc: "Brainly- The Free Learning App",
          size: "9.5 MB",
        },
        {
          id: 2,
          img: "/apps-img/educational/cake.webp",
          desc: "Cake - Learn English",
          size: "9.3 MB",
        },
        {
          id: 3,
          img: "/apps-img/educational/doubtnut.webp",
          desc: "Doubtnut: NCERT",
          size: "18 MB",
        },
        {
          id: 4,
          img: "/apps-img/educational/photomath.webp",
          desc: "Photomath",
          size: "16 MB",
        },
        {
          id: 5,
          img: "/apps-img/educational/pydroid.webp",
          desc: "Pydroid 3",
          size: "50 MB",
        },
        {
          id: 6,
          img: "/apps-img/educational/swayam.webp",
          desc: "Swayam",
          size: "35 MB",
        },
      ],
      government: [
        {
          id: 1,
          img: "/apps-img/government-apps/aarogya-setu.webp",
          desc: "Aarogya Setu",
          size: "3.3 MB",
        },
        {
          id: 2,
          img: "/apps-img/government-apps/bhim.webp",
          desc: "BHIM - Making India Cashless",
          size: "28 MB",
        },
        {
          id: 3,
          img: "/apps-img/government-apps/MEAIndia.webp",
          desc: "MEAIndia",
          size: "13 MB",
        },
        {
          id: 4,
          img: "/apps-img/government-apps/mygov.webp",
          desc: "MyGov",
          size: "7.7 MB",
        },
        {
          id: 5,
          img: "/apps-img/government-apps/pmo.webp",
          desc: "PMO India",
          size: "5.6 MB",
        },
        {
          id: 6,
          img: "/apps-img/government-apps/umang.webp",
          desc: "UMANG",
          size: "34 MB",
        },
      ],
      photos: [
        {
          id: 1,
          img: "/apps-img/photos/canva.webp",
          desc: "Canva Graphics Design",
          size: "27 MB",
        },
        {
          id: 2,
          img: "/apps-img/photos/photo-editor-pro.webp",
          desc: "Photo Editor Pro",
          size: "14 MB",
        },
        {
          id: 3,
          img: "/apps-img/photos/photomath.webp",
          desc: "Photomath",
          size: "98 MB",
        },
        {
          id: 4,
          img: "/apps-img/photos/pixellab.webp",
          desc: "Pixellab - Text on Pictures",
          size: "27 MB",
        },
        {
          id: 5,
          img: "/apps-img/photos/video-downloader-for-insta.webp",
          desc: "Video Downloader",
          size: "6.6 MB",
        },
        {
          id: 6,
          img: "/apps-img/photos/video-editor.webp",
          desc: "Video Editor",
          size: "20 MB",
        },
      ],
      premium: [
        {
          id: 1,
          img: "/apps-img/premium/all-in-one-wallpaper.webp",
          desc: "All in One Wallpaper",
          size: "5.6 MB",
          price: "75.00",
        },
        {
          id: 2,
          img: "/apps-img/premium/augustro.webp",
          desc: "Augustro Music",
          size: "6.2 MB",
          price: "10.00",
        },
        {
          id: 3,
          img: "/apps-img/premium/home-workouts.webp",
          desc: "Home Workouts Gym",
          size: "31 MB",
          price: "140.00",
        },
        {
          id: 4,
          img: "/apps-img/premium/multimine.webp",
          desc: "Multimine",
          size: "2.2 MB",
        },
        {
          id: 5,
          img: "/apps-img/premium/password-manager.webp",
          desc: "Password manager",
          size: "25 MB",
        },
        {
          id: 6,
          img: "/apps-img/premium/simple-gallery-pro.webp",
          desc: "Simple Gallery Pro",
          size: "20 MB",
        },
      ],
      productivity: [
        {
          id: 1,
          img: "/apps-img/productivity/adobe-fill.webp",
          desc: "Adobe Fill And Sign",
          size: "28 MB",
        },
        {
          id: 2,
          img: "/apps-img/productivity/excel.webp",
          desc: "Microsoft Excel",
          size: "62 MB",
        },
        {
          id: 3,
          img: "/apps-img/productivity/free-qr-scanner.webp",
          desc: "FREE QR Scanner",
          size: "6.4 MB",
        },
        {
          id: 4,
          img: "/apps-img/productivity/genius-scan.webp",
          desc: "Game of Warriors",
          size: "60 MB",
        },
        {
          id: 5,
          img: "/apps-img/productivity/teams.webp",
          desc: "Microsoft Teams",
          size: "56 MB",
        },
        {
          id: 6,
          img: "/apps-img/productivity/WPS-office.webp",
          desc: "WPS Office",
          size: "71 MB",
        },
      ],
    };
    return (
      <div className="apps">
        <div className="container">
          <h3 className="title">Recommended for You</h3>
          <div className="flexContainer">
            {apps.recommended.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  size={a.size}
                  category={"apps"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">Educational Apps</h3>
          <div className="flexContainer">
            {apps.education.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  size={a.size}
                  category={"apps"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">Government Apps</h3>
          <div className="flexContainer">
            {apps.government.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  size={a.size}
                  category={"apps"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">Edit Photos like Pro</h3>
          <div className="flexContainer">
            {apps.photos.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  size={a.size}
                  category={"apps"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">Premium Apps</h3>
          <div className="flexContainer">
            {apps.premium.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  size={a.size}
                  category={"apps"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
        <div className="container last">
          <h3 className="title">Be more Productive</h3>
          <div className="flexContainer">
            {apps.productivity.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  size={a.size}
                  category={"apps"}
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

export default Apps;
