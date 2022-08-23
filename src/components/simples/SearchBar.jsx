import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {IconContext} from "react-icons";
import {useDispatch, useSelector} from "react-redux";
import {selectSearch} from "../../store/filters/filtes-selectors";
import {setSearch} from "../../store/filters/filtes-actions";

const SearchBar = () => {

  const dispatch = useDispatch()

  const search = useSelector(selectSearch)


  return (
	<>
	  <form action="">
		<div className='search-bar'>
		  <input
			type="text"
			value={search}
			className='search-bar__input'
			placeholder='Search for a country...'
			onChange={(event) => {
			  dispatch(setSearch(event.target.value))
			}}
		  />

		  <IconContext.Provider value={{size: '25px', className: 'search-bar__icon'}}>
			<AiOutlineSearch/>
		  </IconContext.Provider>

		</div>
	  </form>
	</>
  );
};

export default SearchBar;