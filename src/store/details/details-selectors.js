export const selectCountryDetailsStatus = (state) => ({
  status: state.details.status,
  error: state.details.error
})

export const selectCountryDetails = state => state.details.country

export const selectNeighbors = state => state.details.neighbors