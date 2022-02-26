import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension/developmentOnly";

import theme from "./theme";

const rootReducers = combineReducers({
  theme,
});

const store = createStore(rootReducers, devToolsEnhancer());

export default store;
