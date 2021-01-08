import React, { Component } from "react";
import AppTemplate from "./appTemplate";
import "../css/appTemplate.css";
class Books extends Component {
  render() {
    const books = {
      recommended: [
        {
          id: 1,
          img: "/books_img/new-releases/annihalition-caste.jpeg",
          desc: "Annihalition Caste",
          rating: "3.5",
          price: "100",
        },
        {
          id: 2,
          img: "/books_img/new-releases/constitution-of-India.jpeg",
          desc: "constitution-of-India",
          rating: "4.5",
          price: "150",
        },
        {
          id: 3,
          img: "/books_img/new-releases/invisible-power.jpeg",
          desc: "Invisible Power",
          rating: "3.4",
          price: "20",
        },
        {
          id: 4,
          img: "/books_img/new-releases/rtu-vidya.jpeg",
          desc: "Rtu Vidya",
          rating: "2.5",
          price: "10",
        },
        {
          id: 5,
          img: "/books_img/new-releases/upsc-gs.jpeg",
          desc: "UPSC General Science",
          rating: "4.5",
          price: "150",
        },
        {
          id: 6,
          img: "/books_img/new-releases/upsc-polity.jpeg",
          desc: "UPSC Polity",
          rating: "3.6",
          price: "30",
        },
      ],
      top_sellers: [
        {
          id: 1,
          img: "/books_img/top-sellers/alchemist.jpeg",
          desc: "Alchemist",
          rating: "3.5",
          price: "120",
        },
        {
          id: 2,
          img: "/books_img/top-sellers/atomic-habits.jpeg",
          desc: "Atomic Habits",
          rating: "3.8",
          price: "50",
        },
        {
          id: 3,
          img: "/books_img/top-sellers/power-of-subconcious.jpeg",
          desc: "Power of Subconcious",
          rating: "3.5",
          price: "100",
        },
        {
          id: 4,
          img: "/books_img/top-sellers/think-and-grow.jpeg",
          desc: "Think and Grow Rich",
          rating: "4.2",
          price: "200",
        },
        {
          id: 5,
          img: "/books_img/top-sellers/thinking-fast.jpeg",
          desc: "Thinking Fast",
          rating: "3.8",
          price: "120",
        },
        {
          id: 6,
          img: "/books_img/top-sellers/zero-to-one.jpeg",
          desc: "Zero to One",
          rating: "3.2",
          price: "110",
        },
      ],
      competitive: [
        {
          id: 1,
          img: "/books_img/competitive/fundamental-gk.jpeg",
          desc: "Fundamental General Knowledge",
          rating: "3.5",
          price: "100",
        },
        {
          id: 2,
          img: "/books_img/competitive/general-science.jpeg",
          desc: "General Science",
          rating: "2.5",
          price: "140",
        },
        {
          id: 3,
          img: "/books_img/competitive/gs-competative.jpeg",
          desc: "Competative",
          rating: "4.7",
          price: "150",
        },
        {
          id: 4,
          img: "/books_img/competitive/quick-indian-history.jpeg",
          desc: "Quick Indian History",
          rating: "4.4",
          price: "120",
        },
        {
          id: 5,
          img: "/books_img/competitive/quantitative-aptitude.jpeg",
          desc: "Qunatitative Aptitude",
          rating: "1.5",
          price: "30",
        },
        {
          id: 6,
          img: "/books_img/competitive/upsc-civil-services.jpeg",
          desc: "UPSC Civil Services",
          rating: "3.5",
          price: "100",
        },
      ],
      hindi: [
        {
          id: 1,
          img: "/books_img/hindi/bhagwat-geeta.jpeg",
          desc: "Bhagwat Geeta",
          rating: "4.8",
          price: "200",
        },
        {
          id: 2,
          img: "/books_img/hindi/bharat-ka-sanvindhan.jpeg",
          desc: "Bharat ka Sanvindhan",
          rating: "3.5",
          price: "110",
        },
        {
          id: 3,
          img: "/books_img/hindi/chanakya-niti.jpeg",
          desc: "Chanakya Niti",
          rating: "4.5",
          price: "120",
        },
        {
          id: 4,
          img: "/books_img/hindi/jeena-sikho.jpeg",
          desc: "Jeena Sikho",
          rating: "4.1",
          price: "130",
        },
        {
          id: 5,
          img: "/books_img/hindi/jhatpat-english.jpeg",
          desc: "Jhatpat English",
          rating: "2.5",
          price: "100",
        },
        {
          id: 6,
          img: "/books_img/hindi/stock-market.jpeg",
          desc: "Stock Market",
          rating: "3.5",
          price: "100",
        },
      ],
      reduced_price: [
        {
          id: 1,
          img: "/books_img/reduced-price/best-wife.jpeg",
          desc: "Best Wife",
          rating: "3.2",
          price: "80",
        },
        {
          id: 2,
          img: "/books_img/reduced-price/law-of-success.jpeg",
          desc: "Law Of Success",
          rating: "4.5",
          price: "130",
        },
        {
          id: 3,
          img: "/books_img/reduced-price/meditation-methods.jpeg",
          desc: "Meditation Methods",
          rating: "4.2",
          price: "180",
        },
        {
          id: 4,
          img: "/books_img/reduced-price/pie-and-paste.jpeg",
          desc: "Pie And paste",
          rating: "3.2",
          price: "120",
        },
        {
          id: 5,
          img: "/books_img/reduced-price/power-of-subconcious.jpeg",
          desc: "Power of Subconcious",
          rating: "3.5",
          price: "100",
        },
        {
          id: 6,
          img: "/books_img/reduced-price/relativity.jpeg",
          desc: "Relativity",
          rating: "4.5",
          price: "150",
        },
      ],
      audiobooks: [
        {
          id: 1,
          img: "/books_img/audiobooks/art-public-speaking.webp",
          desc: "Art of Public speaking",
          rating: "3.5",
          price: "100",
        },
        {
          id: 2,
          img: "/books_img/audiobooks/attitude-everything.webp",
          desc: "Attitude Everything",
          rating: "4.5",
          price: "30",
        },
        {
          id: 3,
          img: "/books_img/audiobooks/get-you-want.webp",
          desc: "Get You Want",
          rating: "3.5",
          price: "100",
        },
        {
          id: 4,
          img: "/books_img/audiobooks/man-thinketh.webp",
          desc: "Man Thinketh",
          rating: "3.1",
          price: "120",
        },
        {
          id: 5,
          img: "/books_img/audiobooks/think-grow-rich.webp",
          desc: "Think And Grow Rich",
          rating: "4.5",
          price: "100",
        },
        {
          id: 6,
          img: "/books_img/audiobooks/wise-as-f*ck.webp",
          desc: "Wise as f*ck",
          rating: "3.5",
          price: "100",
        },
      ],
    };
    return (
      <div className="games">
        <div className="container">
          <h3 className="title">Recommended for You</h3>
          <div className="flexContainer">
            {books.recommended.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  rating={a.rating}
                  price={a.price}
                  category={"books"}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">Top Sellers</h3>
          <div className="flexContainer">
            {books.top_sellers.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  rating={a.rating}
                  price={a.price}
                  category={"books"}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">Compitative Books</h3>
          <div className="flexContainer">
            {books.competitive.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  rating={a.rating}
                  price={a.price}
                  category={"books"}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">Hindi Books</h3>
          <div className="flexContainer">
            {books.hindi.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  rating={a.rating}
                  price={a.price}
                  category={"books"}
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3 className="title">Reduced Price</h3>
          <div className="flexContainer">
            {books.reduced_price.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  rating={a.rating}
                  price={a.price}
                  category={"books"}
                />
              );
            })}
          </div>
        </div>
        <div className="container last">
          <h3 className="title">AudioBooks</h3>
          <div className="flexContainer">
            {books.audiobooks.map((a) => {
              return (
                <AppTemplate
                  key={a.id}
                  img={a.img}
                  desc={a.desc}
                  rating={a.rating}
                  price={a.price}
                  category={"books"}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
