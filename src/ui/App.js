import React from "react";
import { Route, Switch } from "react-router-dom";

/* Components */
import Navbar from "./components/Navbar";

/* Routes */
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import NewQuestion from "./pages/NewQuestion";
import LeaderBoard from "./pages/LeaderBoard";
import AnswerQuestion from "./pages/AnswerQuestion";
import NotFound from "./pages/404";

const withNavBar = component => {
  return <Navbar>{component}</Navbar>;
};

/* Router */
const Router = props => {
  return (
    <Switch>
      <Route path="/signin" render={() => <SignIn />} />;
      <Route exact path="/home" render={() => withNavBar(<Home />)} />
      <Route exact path="/add" render={() => withNavBar(<NewQuestion />)} />
      <Route
        exact
        path="/leaderboard"
        render={() => withNavBar(<LeaderBoard />)}
      />
      <Route
        exact
        path="/questions/:id"
        render={() => withNavBar(<AnswerQuestion />)}
      />
      <Route path="*" render={() => withNavBar(<NotFound />)} />
    </Switch>
  );
};

export default Router;
