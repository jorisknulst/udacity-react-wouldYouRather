import React from "react";
import { Route } from "react-router-dom";

import SignIn from "./SignIn";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import Board from "./Board";

const Router = props => {
  return (
    <>
      <Route path="/signin" render={() => <SignIn />} />
      <Route path="/home" render={() => <Home />} />
      <Route path="/new" render={() => <NewQuestion />} />
      <Route path="/board" render={() => <Board />} />
    </>
  );
};

export default Router;
