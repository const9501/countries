import {searchByCode, searchByCountry} from "../../config";

export const SET_COUNTRY = 'details/SET_COUNTRY'
export const SET_LOADING = 'details/SET_LOADING'
export const SET_ERROR = 'details/SET_ERROR'
export const SET_NEIGHBORS = 'details/SET_NEIGHBORS'
export const CLEAR_DETAILS = 'details/CLEAR_DETAILS'

export const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country
})

export const setLoading = () => ({
  type: SET_LOADING,
})
export const setError = (error) => ({
  type: SET_ERROR,
  payload: error
})
export const setNeighbors = (neighbors) => ({
  type: SET_NEIGHBORS,
  payload: neighbors
})
export const clearDetails = () => ({
  type: CLEAR_DETAILS,
})


export const loadCountryByName = (name) => (dispatch, _, {client, api}) => {
  dispatch(setLoading())
  client.get(api.searchByCountry(name))
	.then(({data}) => dispatch(setCountry(data)))
	.catch((error) => dispatch(setError(error.message)))
}

export const loadNeighborsByCodes = (codes) => (dispatch, _, {client, api}) => {
  client.get(api.searchByCode(codes))
	.then(({data}) => dispatch(setNeighbors(data.map(country => country.name.common))))
	.catch(console.error)
}