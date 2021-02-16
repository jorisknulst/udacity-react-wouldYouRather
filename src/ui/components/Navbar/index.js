import React from "react";
import { withRouter } from "react-router-dom";

import MenuItems from "./MenuItems";
import UserItem from "./UserItem";
import Logout from "./Logout";

const Navbar = () => {
  return (
    <div>
      <MenuItems />
      <UserItem />
      <Logout />
    </div>
  );
};

export default withRouter(Navbar);
