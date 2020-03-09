import React, {Component} from "react";
import "./BookCard.css";



class BookCard extends Component  {
  constructor (props) {
    super(props);
    this.state = {
      showExtended : false,
    }   
  }

clickedButtonHandle = () => {
  this.setState ({
showExtended: this.props.card.descriptionExtended,
  })
}
  
render () {
  return (
    <>
  <div className="book-card">
    <div className="book-card card">
      <img
        src={this.props.card.imageUrl}
        alt=""class
      />
      <div>
        <h2>{this.props.card.title}</h2>
        <h3>{this.props.card.author}</h3>
        <h4>{this.props.card.publisher}</h4>
        <p className="book-card-description" style={{ fontSize: "14px" }}>
          {this.props.description}
        </p>

        <button onClick ={this.clickedButtonHandle}>
          Pokaż więcej
        </button>
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
        <div className="card-footer-badge">{this.props.card.rating}</div>
        <i class="fa fa-heart"></i>
      </div>
    </div>
  </div>
  </>
);
  }
}

export default BookCard;