import { compose, configureStore, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const compsedEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore(rootReducer, undefined, compsedEnhancers);
