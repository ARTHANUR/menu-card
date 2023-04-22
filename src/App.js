import React, { useEffect, useState } from "react";
import Restaurant from "./component/Restaurant";
import "./component/Restaurant.css";

function App() {
  const menu = [
    {
      id: 1,
      category: "Breakfast",
      title: "Maggie",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, veritatis?",
      img: "./images/maggie.png",
      price: 69,
    },
    {
      id: 2,
      category: "Breakfast",
      title: "Vada Pav",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, veritatis?",
      img: "./images/vadapav.png",
      price: 96,
    },
    {
      id: 3,
      category: "Lunch",
      title: "Roti Meal",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, veritatis?",
      img: "./images/rotimeals.png",
      price: 90,
    },
    {
      id: 4,
      category: "Snack",
      title: "Golgappa",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, veritatis?",
      img: "./images/golgappa.png",
      price: 30,
    },
    {
      id: 5,
      category: "Dinner",
      title: "Biryani",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, veritatis?",
      img: "./images/biryani.png",
      price: 200,
    },
    {
      id: 6,
      category: "Beverage",
      title: "Oreo Shake",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, veritatis?",
      img: "./images/oreoshake.png",
      price: 70,
    },
  ];

  const [filter, setFilter] = useState([]);
  const [all, setAll] = useState(true);

  const filterItem = (category) => {
    const updatedList = menu.filter((item) => {
      return item.category === category;
    });
    setFilter(updatedList);
  };

  return (
    <>
      <nav>
        <h3 onClick={() => setAll(true)}>All</h3>
        <h3
          onClick={() => {
            filterItem("Breakfast");
            setAll(false);
          }}
        >
          Breakfast
        </h3>
        <h3
          onClick={() => {
            filterItem("Lunch");
            setAll(false);
          }}
        >
          Lunch
        </h3>
        <h3
          onClick={() => {
            filterItem("Snack");
            setAll(false);
          }}
        >
          Snacks
        </h3>
        <h3
          onClick={() => {
            filterItem("Dinner");
            setAll(false);
          }}
        >
          Dinner
        </h3>
        <h3
          onClick={() => {
            filterItem("Beverage");
            setAll(false);
          }}
        >
          Beverages
        </h3>
      </nav>
      <Restaurant pmenu={all ? menu : filter} />
    </>
  );
}

export default App;
