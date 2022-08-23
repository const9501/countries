import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {clearDetails, loadCountryByName} from "../store/details/details-actions";
import {useDispatch, useSelector} from "react-redux";
import {selectCountryDetails, selectCountryDetailsStatus} from "../store/details/details-selectors";
import NavButton from "../components/simples/NavButton";
import CountryDetails from "../components/simples/CountryDetails";

const DetailsPage = () => {

  const {name} = useParams()

  const dispatch = useDispatch()
  const [country] = useSelector(selectCountryDetails)
  const {status, error} = useSelector(selectCountryDetailsStatus)


  useEffect(() => {

	dispatch(loadCountryByName(name))
	return () => {
	  dispatch(clearDetails())
	}

  }, [name, dispatch])


  return (
	<div>

	  <NavButton/>

	  {error && <h2>Can`t load data</h2>}
	  {status === 'received' &&

		<CountryDetails country={country} />

	  }
	</div>
  );
};

export default DetailsPage;