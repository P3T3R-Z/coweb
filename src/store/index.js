import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk"
//redux调试工具配置
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;


const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(reducer, enhancer);
export default store;
