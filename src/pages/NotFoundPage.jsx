import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return (
	<div className='not-found'>
	  <div className='not-found__info'>
		<h1>404</h1>
		<div>Page not found</div>
	  </div>
	  <Link to='/'>GO HOME</Link>
	</div>
  );
};

export default NotFoundPage;