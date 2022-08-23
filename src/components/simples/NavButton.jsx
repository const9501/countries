import React from 'react';
import {useNavigate} from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs";
import {IconContext} from "react-icons";


const NavButton = () => {

  const navigate = useNavigate()

  return (
	<div className='nav-button' onClick={() => navigate(-1)}>

	  <IconContext.Provider value={{size: '25px', className: 'nav-button__icon'}}>
		<BsArrowLeft/>
	  </IconContext.Provider>
	  <div>Back</div>

	</div>
  );
};

export default NavButton;