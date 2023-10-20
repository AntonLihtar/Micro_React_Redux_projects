import {colors, options} from "../arrs.jsx";
import {SET_VALUES} from "./actionTypes.js";

const initState = {
  color: colors[0].text,
  number: options[0].text,
  isButton: true
}


const windowReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_VALUES:
      return {
        color: action.payload.col,
        number: action.payload.num,
        isButton: action.payload.isB
      }

    default :
      return state
  }
}

export default windowReducer