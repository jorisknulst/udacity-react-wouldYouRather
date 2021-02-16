import React from "react";
import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/new">New Question</Link>
      <Link to="/board">Leader board</Link>
    </div>
  );
};

export default MenuItems;
