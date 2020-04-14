import React from 'react';


const addStars = rating => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={i < rating ? "fa fa-star fa-lg" : "fa fa-star-o fa-lg"}
        ></i>
      );
    }
    return stars;
  };
  

  
  const Rating = ({ rating }) => {
    return (
      <div className="card-footer">
        <div style={{ overflow: "hidden" }}>
          <div style={{ width: "99px" }}>
            <div style={{ width: "110px" }}>{addStars(Math.floor(rating))}</div>
          </div>
        </div>
        <div
          className="card-footer-badge"
        >
          {rating}
        </div>
      </div>
    );
  };
  
  export default Rating;