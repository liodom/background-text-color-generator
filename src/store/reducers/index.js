import * as actionTypes from "../action-types";
import { combineReducers } from "redux";

const INITIAL_STATE = {
  bgColor: "white",
  textColor: "black",
};

const changeBackgroundReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  if (type === actionTypes.SET_WHITE) {
    return {
      ...state,
      bgColor: payload.bgColor,
      textColor: payload.textColor,
    };
  }

  if (type === actionTypes.SET_BLACK) {
    return {
      ...state,
      bgColor: payload.bgColor,
      textColor: payload.textColor,
    };
  }
  if (type === actionTypes.SET_BLUE) {
    return {
      ...state,
      bgColor: payload.bgColor,
      textColor: payload.textColor,
    };
  }
  if (type === actionTypes.SET_BROWN) {
    return {
      ...state,
      bgColor: payload.bgColor,
      textColor: payload.textColor,
    };
  }
  if (type === actionTypes.SET_GREEN) {
    return {
      ...state,
      bgColor: payload.bgColor,
      textColor: payload.textColor,
    };
  }
  if (type === actionTypes.SET_LIGHTGREEN) {
    return {
      ...state,
      bgColor: payload.bgColor,
      textColor: payload.textColor,
    };
  }
  if (type === actionTypes.SET_ORANGE) {
    return {
      ...state,
      bgColor: payload.bgColor,
      textColor: payload.textColor,
    };
  }
  if (type === actionTypes.SET_RED) {
    return {
      ...state,
      bgColor: payload.bgColor,
      textColor: payload.textColor,
    };
  }
  if (type === actionTypes.SET_YELLOW) {
    return {
      ...state,
      bgColor: payload.bgColor,
      textColor: payload.textColor,
    };
  }
  return state;
};

export default combineReducers({
  reducer: changeBackgroundReducer,
});
