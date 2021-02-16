import { createStore } from "redux";

import rootReducer from "./reducers/rootReducer";
import middleWare from "./middleware";

const store = createStore(rootReducer, middleWare);

export default store;
