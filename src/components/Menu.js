import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, name, image, desc, price, category } = item;
        return (
          <article
            key={id}
            className="menu-item"
            data-test-id={`menu-item-${category.toLowerCase()}`}
          >
            <img src={image} alt={name} className="photo" />
            <div className="item-info">
              <header>
                <h4>{name}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
