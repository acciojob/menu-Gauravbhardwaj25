import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

const menuData = [
  {
    id: 1,
    name: "Buttermilk Pancakes",
    category: "Breakfast",
    price: "$15.99",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    image: "https://react-projects-5-menu.netlify.app/images/item-1.jpeg",
  },
  {
    id: 2,
    name: "Diner Double",
    category: "Lunch",
    price: "$13.99",
    desc: "Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.",
    image: "https://react-projects-5-menu.netlify.app/images/item-2.jpeg",
  },
  {
    id: 3,
    name: "Godzilla Milkshake",
    category: "Shakes",
    price: "$6.99",
    desc: "Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    image: "https://react-projects-5-menu.netlify.app/images/item-3.jpeg",
  },
  {
    id: 4,
    name: "Country Delight",
    category: "Breakfast",
    price: "$20.99",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.",
    image: "https://react-projects-5-menu.netlify.app/images/item-4.jpeg",
  },
  {
    id: 5,
    name: "Egg Attack",
    category: "Lunch",
    price: "$22.99",
    desc: "Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up.",
    image: "https://react-projects-5-menu.netlify.app/images/item-5.jpeg",
  },
  {
    id: 6,
    name: "Oreo Dream",
    category: "Shakes",
    price: "$18.99",
    desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.",
    image: "https://react-projects-5-menu.netlify.app/images/item-6.jpeg",
  },
];

export default function App() {
  const [items, setItems] = useState(menuData);
  const [category, setCategory] = useState("All");

  const categories = ["All", "Breakfast", "Lunch", "Shakes"];

  const handleFilter = (categoryName) => {
    setCategory(categoryName);
    if (categoryName === "All") {
      setItems(menuData);
    } else {
      setItems(menuData.filter((item) => item.category === categoryName));
    }
  };

  return (
    <main id="main">
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>

        <div className="btn-container">
          {categories.map((cat, index) => (
            <button
              key={index}
              id={`filter-btn-${index}`}
              className={`filter-btn ${category === cat ? "active" : ""}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <Menu items={items} />
      </section>
    </main>
  );
}
