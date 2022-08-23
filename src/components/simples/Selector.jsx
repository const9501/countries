import React from 'react';
import Select from 'react-select'
import {useDispatch, useSelector} from "react-redux";
import {selectRegion} from "../../store/filters/filtes-selectors";
import {setRegion} from "../../store/filters/filtes-actions";

const optionsMap = {
  'Africa': { value: 'Africa', label: 'Africa' },
  'America': { value: 'America', label: 'America' },
  'Asia': { value: 'Asia', label: 'Asia' },
  'Europe': { value: 'Europe', label: 'Europe' },
  'Oceania': { value: 'Oceania', label: 'Oceania' },
}

const options = Object.values(optionsMap)

const Selector = () => {

  const dispatch = useDispatch()
  const region = useSelector(selectRegion)



  return (
	<div>
	  <Select
		options={options}
		isClearable
		isSearchable={false}
		placeholder='Filter by Region'
		classNamePrefix='custom-select'
		value={optionsMap[region]}
		onChange={(region) => {
		  dispatch(setRegion(region?.value || ''));
		}}
	  />
	</div>
  );
};

export default Selector;