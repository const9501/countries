import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {FaRegMoon} from "react-icons/fa";
import {FiSun} from "react-icons/fi";
import {IconContext} from "react-icons";
import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "../../store/theme/theme-actions";
import {clearFilters} from "../../store/filters/filtes-actions";


const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme)


  useEffect(() => {
	document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
	<div className='header'>
	  <h1 onClick={() => {
		navigate('/')
		dispatch(clearFilters())
	  }}>Where in the world?</h1>
	  <div
		className='theme-switch'
		onClick={() => {
		  if (theme === 'light') dispatch(setTheme('dark'))
		  else dispatch(setTheme('light'))
		}}>

		<IconContext.Provider value={{size: '23px', className: ''}}>
		  {theme === 'dark' ? <FiSun/> : <FaRegMoon/>}
		</IconContext.Provider>

		<div className='theme-switch__description'>{theme === 'dark' ? 'Light' : 'Dark'} Mode</div>


	  </div>
	</div>
  );
};

export default Header;