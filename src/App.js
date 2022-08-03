import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/simples/Header";

const App = () => {
  return (
	<div className='wrapper'>
	  <Header/>
	  <div className='content'>
		<Routes>
		  <Route path='/' exact element={<HomePage/>} />
		  <Route path='country/:name' element={<DetailsPage/>}/>
		  <Route path='*' element={<NotFoundPage/>}/>
		</Routes>
	  </div>
	</div>
  );
};

export default App;