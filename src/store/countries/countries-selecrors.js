export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
})

export const selectAllCountries = state => state.countries.list

export const selectFilteredCountries = (state, {search = '', region = ''}) => {
  return state.countries.list.filter(
    country => (
     ( country.name.common.toLowerCase().includes(search.toLowerCase()) ||
      country.name.official.toLowerCase().includes(search.toLowerCase())) && country.region.includes(region)
    )
  )
}