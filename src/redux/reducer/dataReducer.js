import { GET_PRODUCT } from '../type'

const initialState = {
  product: [],
}
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      }
    default:
      return state
  }
}
