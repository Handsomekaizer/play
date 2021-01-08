import React, { Component } from "react";
import "../css/appTemplate.css";
class AppTemplate extends Component {
  handleTemplate = () => {
    if (this.props.category === "movies" || this.props.category === "books") {
      return (
        <div className="appTemplate movies">
          <div>
            <img src={process.env.PUBLIC_URL + "/" + this.props.img} alt="" />
          </div>
          <p className="desc">{this.props.desc}</p>
          <span className="price">{this.props.rating}★</span>
          <span className="size rating">₹{this.props.price}</span>
        </div>
      );
    } else {
      return (
        <div className="appTemplate apps">
          <div>
            <img src={process.env.PUBLIC_URL + "/" + this.props.img} alt="" />
          </div>
          <p className="desc">{this.props.desc}</p>
          <span className="size rating">{this.props.size}</span>
        </div>
      );
    }
  };
  render() {
    return <div>{this.handleTemplate()}</div>;
  }
}

export default AppTemplate;
