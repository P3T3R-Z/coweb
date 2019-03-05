
import { HomeReducer } from "../page/home/store/index";
import {PriceReducer} from "../page/price/store/index";
import { combineReducers } from "redux-immutable"  


//合并成大的reducer
export default combineReducers({
  home: HomeReducer,
  price: PriceReducer
});
