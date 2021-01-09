import React, { Component } from "react";
import AppTemplate from "./appTemplate";
import "../css/appTemplate.css";
class Movies extends Component {
  render() {
    const movies = {
      new_releases: [
        {
          id: 1,
          img: "/movies_img/new_releases/affra-taffri.webp",
          desc: "Affra Taffri",
          rating: "3.7",
          price: "100.00",
        },
        {
          id: 2,
          img: "/movies_img/new_releases/broken-hearts.webp",
          desc: "The Broken Hearts Gallery",
          rating: "3.6",
          price: "120.00",
        },
        {
          id: 3,
          img: "/movies_img/new_releases/door-ke-darshan.webp",
          desc: "Door ke Darshan",
          rating: "3.8",
          price: "100.00",
        },
        {
          id: 4,
          img: "/movies_img/new_releases/life-in-year.webp",
          desc: "Life In A Year",
          rating: "3.7",
          price: "120.00",
        },
        {
          id: 5,
          img: "/movies_img/new_releases/patra-vaitha.webp",
          desc: "Patra Vaitha Nerupondru",
          rating: "3.6",
          price: "25.00",
        },
        {
          id: 6,
          img: "/movies_img/new_releases/yellow-rose.webp",
          desc: "Yellow Rose",
          rating: "3.7",
          price: "120.00",
        },
      ],
      rental: [
        {
          id: 1,
          img: "/movies_img/new-rental/deep-blue-sea.webp",
          desc: "Deep Blue Sea 3",
          rating: "3.3",
          price: "150.00",
        },
        {
          id: 2,
          img: "/movies_img/new-rental/invisible-man.webp",
          desc: "The Invisible Man (2020)",
          rating: "3.4",
          price: "150.00",
        },
        {
          id: 3,
          img: "/movies_img/new-rental/one-night-bangkok.webp",
          desc: "One Night in Bangkok",
          rating: "3.4",
          price: "150.00",
        },
        {
          id: 4,
          img: "/movies_img/new-rental/psycho.webp",
          desc: "Psycho",
          rating: "3.5",
          price: "25.00",
        },
        {
          id: 5,
          img: "/movies_img/new-rental/scoob.webp",
          desc: "SCOOB!",
          rating: "3.7",
          price: "150.00",
        },
        {
          id: 6,
          img: "/movies_img/new-rental/varmaa.webp",
          desc: "Varmaa",
          rating: "3.3",
          price: "50.00",
        },
      ],
      science_fiction: [
        {
          id: 1,
          img: "/movies_img/science-fiction/deep-blue-sea.webp",
          desc: "Deep Blue Sea 3",
          rating: "3.3",
          price: "150.00",
        },
        {
          id: 2,
          img: "/movies_img/science-fiction/godzilla.webp",
          desc: "Godzilla: King Of The Monsters",
          rating: "4.6",
          price: "150.00",
        },
        {
          id: 3,
          img: "/movies_img/science-fiction/incredible-hulk.webp",
          desc: "The Incredible Hulk",
          rating: "4.4",
          price: "120.00",
        },
        {
          id: 4,
          img: "/movies_img/science-fiction/jurassic-world.webp",
          desc: "Jurassic World: Fallen Kingdom",
          rating: "4.5",
          price: "120.00",
        },
        {
          id: 5,
          img: "/movies_img/science-fiction/power-rangers.webp",
          desc: "Power Rangers",
          rating: "4.5",
          price: "180.00",
        },
        {
          id: 6,
          img: "/movies_img/science-fiction/sonic.webp",
          desc: "Sonic The Hedgehog",
          rating: "4.1",
          price: "120.00",
        },
      ],
      bollywood: [
        {
          id: 1,
          img: "/movies_img/bollywood/bahubali-2.webp",
          desc: "Bahubali 2: The Conclusion (Hindi)",
          rating: "4.5",
          price: "100.00",
        },
        {
          id: 2,
          img: "/movies_img/bollywood/hate-story-2.webp",
          desc: "Hate story 2",
          rating: "3.9",
          price: "25.00",
        },
        {
          id: 3,
          img: "/movies_img/bollywood/ki-ka.webp",
          desc: "Ki & Ka",
          rating: "3.7",
          price: "25.00",
        },
        {
          id: 4,
          img: "/movies_img/bollywood/love-aaj-kal.webp",
          desc: "Love Aaj kal",
          rating: "2.9",
          price: "75.00",
        },
        {
          id: 5,
          img: "/movies_img/bollywood/nasha.webp",
          desc: "Nasha",
          rating: "3.7",
          price: "75.00",
        },
        {
          id: 6,
          img: "/movies_img/bollywood/one-night-stand.webp",
          desc: "One Night Stand",
          rating: "3.6",
          price: "50.00",
        },
      ],
      batman: [
        {
          id: 1,
          img: "/movies_img/batman/batkid.webp",
          desc: "Batkid Begins",
          rating: "4.2",
          price: "120.00",
        },
        {
          id: 2,
          img: "/movies_img/batman/batman-killing.webp",
          desc: "Batman: The Killing Joke",
          rating: "4.3",
          price: "120.00",
        },
        {
          id: 3,
          img: "/movies_img/batman/batman-mecks.webp",
          desc: "Batman Unlimited: Mechs",
          rating: "4.2",
          price: "120.00",
        },
        {
          id: 4,
          img: "/movies_img/batman/batman-unlimited.webp",
          desc: "batman Unlimited:Animal",
          rating: "4.2",
          price: "120.00",
        },
        {
          id: 5,
          img: "/movies_img/batman/batman-vs-superman.webp",
          desc: "Batman Vs Superman: Dawn of Justice",
          rating: "4.3",
          price: "120.00",
        },
        {
          id: 6,
          img: "/movies_img/batman/justice-league.webp",
          desc: "Justice League",
          rating: "3.2",
          price: "120.00",
        },
      ],
      exorcism: [
        {
          id: 1,
          img: "/movies_img/exorcism/annabellae-comes-home.webp",
          desc: "Annabelle Comes Home",
          rating: "4.1",
          price: "150.00",
        },
        {
          id: 2,
          img: "/movies_img/exorcism/conjuring-2.webp",
          desc: "The Conjuring 2",
          rating: "4.3",
          price: "120.00",
        },
        {
          id: 3,
          img: "/movies_img/exorcism/ouija.webp",
          desc: "Ouija: Origin of Evil",
          rating: "4.4",
          price: "120.00",
        },
        {
          id: 4,
          img: "/movies_img/exorcism/possession.webp",
          desc: "The Possession Of Hannah Grace",
          rating: "4.0",
          price: "80.00",
        },
        {
          id: 5,
          img: "/movies_img/exorcism/ragini-mms.webp",
          desc: "Ragini MMS-2",
          rating: "3.8",
          price: "50.00",
        },
        {
          id: 6,
          img: "/movies_img/exorcism/unborn.webp",
          desc: "The Unborn (Theatrical)",
          rating: "4.1",
          price: "120.00",
        },
      ],
    };
    return (
      <div className="games">
        <div className="container">
          <h3 className="title">New Releases</h3>
          <div className="flexContainer">
            {movies.new_releases.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  rating={a.rating}
                  price={a.price}
                  category={"movies"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">New Rental movies</h3>
          <div className="flexContainer">
            {movies.rental.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  rating={a.rating}
                  price={a.price}
                  category={"movies"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">Science Fiction movies</h3>
          <div className="flexContainer">
            {movies.science_fiction.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  rating={a.rating}
                  price={a.price}
                  category={"movies"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">Bollywood movies</h3>
          <div className="flexContainer">
            {movies.bollywood.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  rating={a.rating}
                  price={a.price}
                  category={"movies"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">Batman movies</h3>
          <div className="flexContainer">
            {movies.batman.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  rating={a.rating}
                  price={a.price}
                  category={"movies"}
                  onPageChange={this.props.onPageChange}
                />
              );
            })}
          </div>
        </div>
        <div className="container last">
          <h3 className="title">Exorcism movies</h3>
          <div className="flexContainer">
            {movies.exorcism.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  rating={a.rating}
                  price={a.price}
                  category={"movies"}
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

export default Movies;
