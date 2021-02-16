import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import logger from "./logger";

const middleWare = applyMiddleware(thunk, logger);

export default middleWare;
