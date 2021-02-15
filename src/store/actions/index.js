import * as actionTypes from "../action-types";

export const setWhite = () => ({
  type: actionTypes.SET_WHITE,
  payload: {
    bgColor: "white",
    textColor: "black",
  },
});

export const setBlack = () => ({
  type: actionTypes.SET_BLACK,
  payload: {
    bgColor: "black",
    textColor: "white",
  },
});

export const setBlue = () => ({
  type: actionTypes.SET_BLUE,
  payload: {
    bgColor: "blue",
    textColor: "white",
  },
});
export const setBrown = () => ({
  type: actionTypes.SET_BROWN,
  payload: {
    bgColor: "brown",
    textColor: "white",
  },
});

export const setGreen = () => ({
  type: actionTypes.SET_GREEN,
  payload: {
    bgColor: "green",
    textColor: "white",
  },
});

export const setLightgreen = () => ({
  type: actionTypes.SET_LIGHTGREEN,
  payload: {
    bgColor: "lightgreen",
    textColor: "black",
  },
});

export const setOrange = () => ({
  type: actionTypes.SET_ORANGE,
  payload: {
    bgColor: "orange",
    textColor: "white",
  },
});

export const setRed = () => ({
  type: actionTypes.SET_RED,
  payload: {
    bgColor: "red",
    textColor: "white",
  },
});

export const setYellow = () => ({
  type: actionTypes.SET_YELLOW,
  payload: {
    bgColor: "yellow",
    textColor: "black",
  },
});
