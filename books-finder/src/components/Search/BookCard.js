import React, {Component} from "react";
import "./BookCard.css";

class BookCard extends Component  {
  constructor (props) {
    super(props);
    this.state = {
      showExtended : false,
    }
    
  }
extendButtonHandle = () => {
  this.setState ({
showExtended: true
  })
}
  
render () {
  return (
    <>
  <div className="book-card">
    <div className="book-card card">
      <img
        src={props.imageUrl}
        alt=""class
      />
      <div>
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <h4>{props.publisher}</h4>
        <p className="book-card-description" style={{ fontSize: "14px" }}>
          {props.description}
        </p>
        <button onClick= {this.extendButtonHandle} className = "book-card-description-extended-button" >
          <p>Pokaż więcej</p>
        </button>
        <p className="book-card-description-extended" style={{ fontSize: "14px" }}>
          {props.descriptionExtended}
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
        <div className="card-footer-badge">{props.rating}</div>
        <i class="fa fa-heart"></i>
      </div>
    </div>
  </div>
  </>
);
  }
}

export default BookCard;