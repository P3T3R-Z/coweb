import * as actionTypes from "./actionTypes";
export const getTab = index => {
  return {
    type: actionTypes.showTab,
    value: index
  };
};
