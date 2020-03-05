import React from "react";
import "./BookCard.css";

const BookCard = ({ card }) => (
  <div className="book-card">
    <div className="book-card card">
      <img
        src={card.imageUrl}
        alt=""class
      />
      <div>
        <h2>{card.title}</h2>
        <h3>{card.author}</h3>
        <h4>{card.publisher}</h4>
        <p className="book-card-description" style={{ fontSize: "14px" }}>
          {card.description}
        </p>
        <button className = "book-card-description-extended-button" >
          <p>Pokaż więcej</p>
        </button>
        <p className="book-card-description-extended" style={{ fontSize: "14px" }}>
          {card.descriptionExtended}
        </p>
      </div>
      <div className="card-footer">
        <div style={{ overflow: "hidden" }}>
          <div style={{ width: "99px" }}>
            <div style={{ width: "110px" }}>
              <i className="fa fa-star fa-lg"></i>
              <i className="fa fa-star fa-lg"></i>
              <i className="fa fa-star fa-lg"></i>
              <i className="fa fa-star fa-lg"></i>
              <i className="fa fa-star-o fa-lg"></i>
            </div>
          </div>
        </div>
        <div className="card-footer-badge">{card.rating}</div>
        <i class="fa fa-heart"></i>
      </div>
    </div>
  </div>
);

export default BookCard;