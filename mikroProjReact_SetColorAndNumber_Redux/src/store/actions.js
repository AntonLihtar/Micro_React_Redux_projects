import {SET_VALUES} from "./actionTypes.js";

export const setState = (obj) => {
  return({
    type: SET_VALUES,
    payload: {...obj.payload}
  })
}