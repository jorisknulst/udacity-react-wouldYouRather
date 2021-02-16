import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./state/store";
import App from "../src/ui/App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

/* COMPONENTS

App
  Navbar
    Menu items: Home, New poll, Leader board
    User
    Logout
  Main
    Home
      Category Menu
      Polls
    New poll / Leader board

Signin
*/
