import React, { useState } from "react";

function Item({ name, category}) {
  const [items, setItems] = useState(false);

  function handleAddCart(){
    setItems(!items)
    // console.log(items)
  }

  return (
    <li className={"" + (items ? "in-cart" : "")}>
    <span>{name}</span>
    <span className="category">{category}</span>
    <button onClick={handleAddCart} className="add">Add to Cart</button>
    </li>
    );
  }
  
  export default Item;
  
  