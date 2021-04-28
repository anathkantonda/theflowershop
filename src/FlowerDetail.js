import React from "react";
import './styles.css';

const FlowerDetail = props => {
  return (
    <div>
      <div className="card">
        <div className="header">{props.flowerName}</div>
        <div className="image">
          <img src={props.image} alt="flower"/>
        </div>
        <div className="content">
        <a href={props.link} target="_blank" rel="noreferrer"><button>Shop Here</button></a>
         </div>
      </div>
    </div>
  )
}

export default FlowerDetail;
