import React from 'react';

const Button = ({label, onClick}) => {
  return (
	<div onClick={onClick} className='button'>
	  {label}
	</div>
  );
};

export default Button;