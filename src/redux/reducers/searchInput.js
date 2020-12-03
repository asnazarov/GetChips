import {FIND_INPUT_NUMBER, INPUT_NUMBER, INPUT_QUANTITY} from "../constants";

const initialState = {
  focusNumber: false,
  colorNumber: '#439B24',
  refNumber: "",
  valueNumber: "",
  findInputNumber: [],

  focusQuantity: false,
  colorQuantity: '#439B24',
  refQuantity: null,
  valueQuantity: "",

  event: null,
}

const searchInput = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_NUMBER: {
      // console.log(action.payload.ref.current)
      return {
        ...state,
        focusNumber: action.payload.focus,
        colorNumber: action.payload.color,
        refNumber: action.payload.ref?.current,
        valueNumber: action.payload.value
      }
    }
    case FIND_INPUT_NUMBER: {
      return {
        ...state,
        findInputNumber: action.payload
      }
    }
    case INPUT_QUANTITY: {
      return {
        ...state,
        focusQuantity: action.payload.focus
      }
    }
    default:
      return state
  }
}

export default searchInput;