import {FIND_INPUT_NUMBER, INPUT_NUMBER, INPUT_QUANTITY} from "../constants";

export const inputNumberF = (focus, color, ref, value = "") => ({
  type: INPUT_NUMBER,
  payload: {focus, color, ref, value}
})

export const inputQuantityF = (focus, color) => ({
  type: INPUT_QUANTITY,
  payload: {focus, color}
})

export const findInputNumberF = (findNumber) => ({
  type: FIND_INPUT_NUMBER,
  payload: findNumber
})