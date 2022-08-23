import {combineReducers} from "redux";
import {countriesReducer} from "./countries/countries-reducer";
import {detailsReducer} from "./details/details-reducer";
import {themeReducer} from "./theme/theme-reducer";
import {filtersReducer} from "./filters/filtes-reducer";

export const rootReducer = combineReducers({
  countries: countriesReducer,
  details: detailsReducer,
  theme: themeReducer,
  filters: filtersReducer
})