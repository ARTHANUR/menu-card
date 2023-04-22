import React from "react";
import "./Restaurant.css";

const Restaurant = (props) => {
  const menuCard = props.pmenu.map((item) => {
    return (
      <>
        <div className="card">
          <span>
            <h3>{item.id}</h3>
            <p>{item.category}</p>
          </span>
          <h1>{item.title}</h1>
          <p> {item.desc} </p>
          <img src={item.img} alt="" />
          <div>
            <h2>$ {item.price} </h2>
            <button className="btn btn-outline-success">Order now !!</button>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="card-section">{menuCard}</div>
    </>
  );
};

export default Restaurant;
