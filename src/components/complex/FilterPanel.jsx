import React from 'react';
import SearchBar from "../simples/SearchBar";
import Selector from "../simples/Selector";

const FilterPanel = () => {
  return (
	<div className='filter-panel'>
	  <SearchBar/>
	  <Selector/>
	</div>
  );
};

export default FilterPanel;