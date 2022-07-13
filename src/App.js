import React, { useState } from "react";
import "./App.css";
import Cards from "./Component/Card";

const data = [
  {
    id: 1,
    name: "Chocochip cookise",
    price: "10",
    img: "https://m.media-amazon.com/images/I/618-SiX1CKL._SL1280_.jpg",
  },

  {
    id: 2,
    name: "White chocochip cookise",
    price: "20",
    img: "https://m.media-amazon.com/images/I/61W0p+0sRyL._SX522_.jpg",
  },

  {
    id: 3,
    name: "Just butter cookise",
    price: "80",
    img: "https://m.media-amazon.com/images/I/514SWEwkIbL._SX522_.jpg",
  },

  {
    id: 4,
    name: "Butter cookise",
    price: "30",
    img: "https://zozodeals.com/source/better-bite-superseed-cookies-180g.jpg",
  },

  {
    id: 5,
    name: "  Butter cookise",
    price: "20",
    img: "https://5.imimg.com/data5/SELLER/Default/2020/12/XC/JZ/LA/119086918/butter-cookies-500x500.jpg",
  },
  {
    id: 6,
    name: "Perfect cookise",
    price: "50",
    img: "https://m.media-amazon.com/images/I/614rIEXesWL._SX522_.jpg",
  },
  {
    id: 7,
    name: "Max protein",
    price: "40",
    img: "https://m.media-amazon.com/images/I/611Khy1N+CL._SX522_.jpg",
  },
  {
    id: 8,
    name: "Butter bite",
    price: "60",
    img: "https://n1.sdlcdn.com/imgs/c/u/t/Priyagold-Cookies-Butter-250-gm-SDL269459425-1-24632.jpg",
  },

  {
    id: 10,
    name: "Milk butter",
    price: "20",
    img: "https://m.media-amazon.com/images/I/618-SiX1CKL._SX522_.jpg",
  },
  {
    id: 11,
    name: "Max protein",
    price: "40",
    img: "https://m.media-amazon.com/images/I/611Khy1N+CL._SX522_.jpg",
  },
  {
    id: 12,
    name: "Milk butterbite",
    price: "30",
    img: "https://m.media-amazon.com/images/I/618-SiX1CKL._SX522_.jpg",
  },
];

function App() {
  const [price, setPrice] = React.useState(0);
  const [count, setCount] = useState(0);
  const handleClick = (num) => {
    let b = parseInt(num);
    setPrice((current) => current + b);
    if (count < 8) {
      setCount(count + 1);
    } else {
      alert("you can select only 8 time");
      setPrice(0);
      setCount(0);
    }
  };
  const handleRemove = (num1) => {
    let c = parseInt(num1);
    setPrice((current) => current - c);
  };

  return (
    <div className="App">
      <h1 className="main-heading">🥯Betterbite - task🥯</h1>

      <div className="div-card">
        <h2 className="pricesize">Price : {price}</h2>
        <h2 className="countsize">Count : {count}</h2>
      </div>

      {data.map((datas) => {
        return (
          <>
            <Cards
              handleClick={handleClick}
              handleRemove={handleRemove}
              img={datas.img}
              price={datas.price}
              name={datas.name}
            />
          </>
        );
      })}
    </div>
  );
}

export default App;
