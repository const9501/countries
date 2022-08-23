import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import FilterPanel from "../components/complex/FilterPanel";
import {useDispatch, useSelector} from "react-redux";
import {selectCountriesInfo, selectFilteredCountries} from "../store/countries/countries-selecrors";
import {loadCountries} from "../store/countries/countries-actions";
import Card from "../components/simples/Card";
import {selectAllFilters} from "../store/filters/filtes-selectors";
import {Oval} from "react-loader-spinner";

const HomePage = () => {

  const dispatch = useDispatch()
  const {search, region} = useSelector(selectAllFilters)
  const countries = useSelector(state => selectFilteredCountries(state, {search, region}))
  const {status, error, qty} = useSelector(selectCountriesInfo)
  const navigate = useNavigate()


  useEffect(() => {

	if (qty === 0) {
	  dispatch(loadCountries());
	}


  }, [dispatch])

  return (
	<>
	  <FilterPanel/>

	  {error && <h2>Can`t load data</h2>}
	  {status === 'loading' && qty === 0 &&
		<Oval
		  height={80}
		  width={80}
		  color="#000"
		  secondaryColor="#969696FF"
		  wrapperClass="loader"
		/>
	  }
	  {status === 'received' &&

		<div className='countries-list'>
		  {
			countries.map((country, index) => {
			  return <Card
				key={index}
				country={country}
				onClick={() => navigate(`country/${country.name.common}`)}
			  />
			})
		  }
		</div>

	  }

	</>
  );
};

export default HomePage;