import React from "react";
function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img
          src={props.img}
          width="500"
          height="400"
          alt="myPic"
          className="img_card"
        />
        <div className="card_info">
          <span className="card_cotegory">{props.title} </span>
          <h3 className="card_title">{props.Mname}</h3>
          <a href={props.watchlink} target="_blank">
            <button>Watch</button>
          </a>
          <a href={props.Downlink} target="_blank">
            <button>Download Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
