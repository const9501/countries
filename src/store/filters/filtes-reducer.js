import {CLEAN_FILTERS, SET_REGION, SET_SEARCH} from "./filtes-actions";

const initialState = {
  search: '',
  region: ''
}

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {

	case SET_SEARCH:
	  return {...state, search: action.payload}

	case SET_REGION:
	  return {...state, region: action.payload}

	case CLEAN_FILTERS:
	  return initialState

	default:
	  return state

  }
}



