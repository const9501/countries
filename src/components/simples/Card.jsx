import React from 'react';

const Card = ({country, onClick}) => {


  const flag = country.flags.png
  const name = country.name.common
  const population = country.population
  const region = country.region
  const capital = country.capital[0]


  return (
	<div className='card'>
	  <div className="card__img" onClick={onClick}>
		<img src={flag} alt="flag"/>
	  </div>


	  <div className="card__container">

		<div className='card__name'>{name}</div>



		<div className='card__info'>
		  <div>
			<span className='card__info-title'>Population: </span>
			<span className='card__info-text'>{population}</span>
		  </div>

		  <div>
			<span className='card__info-title'>Region: </span>
			<span className='card__info-text'>{region}</span>
		  </div>

		  <div>
			<span className='card__info-title'>Capital: </span>
			<span className='card__info-text'>{capital}</span>
		  </div>
		</div>



	  </div>

	</div>
  );
};

export default Card;