import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadNeighborsByCodes} from "../../store/details/details-actions";
import {selectNeighbors} from "../../store/details/details-selectors";
import Button from "./Button";
import {useNavigate} from "react-router-dom";

const CountryDetails = ({country}) => {

  const navigate = useNavigate()

  const flag = country.flags.svg
  const name = country.name.common

  const nativeNameKey = Object.keys(country.name.nativeName)[0]
  const nativeName = country.name.nativeName[nativeNameKey].common

  const population = country.population
  const region = country.region
  const subRegion = country.subregion
  const capital = country.capital //array
  const tld = country.tld //array
  const borders = country.borders || []

  let currencies
  for (const currency in country.currencies) {
	currencies = (country.currencies[currency].name);
  }

  const languages = [] //array
  for (const language in country.languages) {
	languages.push(country.languages[language]);
  }


  const dispatch = useDispatch()
  const neighbors = useSelector(selectNeighbors)

  useEffect(() => {
	if (borders.length) {
	  dispatch(loadNeighborsByCodes(borders))
	}
  }, [dispatch])

  return (
	<div className='details-card'>

	  <div className='details-card__flag'><img src={flag} alt="flag"/></div>

	  <div className='details-card__container'>


		<div className='details-card__name'>{name}</div>

		<div className='details-card__info'>

		  <div className='details-card__info-section'>
			<div><span className='card__info-title'>Native Name: </span>{nativeName}</div>
			<div><span className='card__info-title'>Population: </span>{population}</div>
			<div><span className='card__info-title'>Region: </span>{region}</div>
			<div><span className='card__info-title'>Sub Region: </span>{subRegion}</div>
			<div><span
			  className='card__info-title'>Capital: </span> {capital.length > 1 ? capital.join(', ') : capital[0]}</div>
		  </div>

		  <div className='details-card__info-section'>
			<div><span className='card__info-title'>Top Level Domain: </span>{tld.length > 1 ? tld.join(', ') : tld[0]}
			</div>
			<div><span className='card__info-title'>Currencies: </span>{currencies}</div>
			<div><span
			  className='card__info-title'>Languages: </span>{languages.length > 1 ? languages.join(', ') : languages[0]}
			</div>
		  </div>

		</div>


		<div className='details-card__border-countries'>
		  {
			borders.length ?
			  <>
				<span className='card__info-title'>Border Countries:</span>
				<div className='details-card__border-countries-buttons'>
				  {
					neighbors.map(
					  (countryName, index) =>
						<Button
						  key={index}
						  label={countryName}
						  onClick={() => navigate(`/country/${countryName}`)}
						/>
					)
				  }
				</div>
			  </> :
			  <div className='card__info-title'>The country has no neighbors</div>
		  }
		</div>


	  </div>

	</div>
  );
};

export default CountryDetails;