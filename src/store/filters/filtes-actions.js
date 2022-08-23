export const SET_SEARCH = 'filters/SET_SEARCH'
export const SET_REGION = 'filters/SET_REGION'
export const CLEAN_FILTERS = 'filters/CLEAN_FILTERS'

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search
})
export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region
})

export const clearFilters = () => ({
  type: CLEAN_FILTERS
})

